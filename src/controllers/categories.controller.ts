import type { Request, Response } from 'express';
// biome-ignore lint/style/useImportType: <explanation>
import { CreateCategoryDTO } from '../database/dtos/categories.dto';
import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../database/schemas/category.schema';
import { CategoriesService } from '../services/categories.service';

export class CategoriesController {
	async create(
		req: Request<unknown, unknown, CreateCategoryDTO>,
		res: Response,
	) {
		const { title, color } = req.body;

		const repository = new CategoriesRepository(CategoryModel);
		const service = new CategoriesService(repository);

		const result = await service.create({ title, color });

		return res.status(201).json(result);
	}
}
