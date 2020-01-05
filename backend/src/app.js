import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import http from 'http';
import socketio from 'socket.io';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = socketio(this.server);

    this.connectedUsers = [];

    this.connection();
    this.middlewares();
    this.routes();
  }

  connection() {
    this.io.on('connection', socket => {
      const { id } = socket.handshake.query;
      console.log('entrou', id);
      this.connectedUsers[id] = socket.id;
    });

    // setInterval(function() {
    //   console.log(this.connectedUsers);
    //   // const bookingUserSocket = req.connectedUsers[booking.user];
    //   // const test = this.connectedUsers['5e10bbba25263e2c517f66ab'];
    //   // // const spot = await Spot.findById(booking.spot);

    //   // if (test) {
    //   //   console.log('existe');
    //   //   // req.io
    //   //   //     .to(bookingUserSocket)
    //   //   //     .emit("booking_response", { ...booking._doc, spot });
    //   // }
    // }, 5000);
  }

  middlewares() {
    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;
      return next();
    });

    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
