import { Router } from 'express';

import { CategoriesController } from '../controllers/categories.controller';

export const categoriesRouter = Router();

const controller = new CategoriesController();

categoriesRouter.post('/', controller.create);
