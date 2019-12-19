import { Router } from 'express';

import SignInController from './app/controllers/SignInController';

const routes = new Router();

routes.post('/signin', SignInController.store);

export default routes;
