import type { CreateCategoryDTO } from '../database/dtos/categories.dto';
import type { CategoriesRepository } from '../database/repositories/categories.repository';
import { Category } from '../entities/categories.entity';
export class CategoriesService {
	constructor(private categoriesRepository: CategoriesRepository) {}

	async create({ title, color }: CreateCategoryDTO): Promise<Category> {
		const category = new Category({
			title,
			color,
		});

		const createdCategory = await this.categoriesRepository.create(category);

		return createdCategory;
	}
}
