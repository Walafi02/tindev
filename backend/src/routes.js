import { Router } from 'express';

import authMiddleware from './app/middleware/auth';

import SignInController from './app/controllers/SignInController';
import UsersController from './app/controllers/UsersController';

const routes = new Router();

routes.post('/signin', SignInController.store);

routes.use(authMiddleware);
routes.get('/users', UsersController.index);

export default routes;
