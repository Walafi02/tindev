import { Router } from 'express';

import authMiddleware from './app/middleware/auth';

import SignInController from './app/controllers/SignInController';
import UsersController from './app/controllers/UsersController';
import LikeController from './app/controllers/LikeController';
import DislikeController from './app/controllers/DislikeController';

const routes = new Router();

routes.post('/signin', SignInController.store);

routes.use(authMiddleware);
routes.get('/users', UsersController.index);
routes.post('/users/:id/like', LikeController.update);
routes.post('/users/:id/dislike', DislikeController.update);

export default routes;
