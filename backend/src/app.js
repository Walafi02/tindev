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
      this.connectedUsers[id] = socket.id;
    });
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
