import { Router } from 'express';
import { baseRoute } from './base.route';
import { categoriesRouter } from './categories.route';

export const routes = Router();

routes.use('/', baseRoute);
routes.use('/categories', categoriesRouter);
