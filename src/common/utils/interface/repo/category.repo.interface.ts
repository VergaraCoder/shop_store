import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto';
import { CategoryGroup } from 'src/category/entities/category.entity';

export interface ICategoryRepository {
  create(data: CreateCategoryDto): Promise<CategoryGroup>;
  findAll(): Promise<CategoryGroup[]>;
  findOne(id: number): Promise<CategoryGroup>;
  update(id: number, dataUpdate: UpdateCategoryDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
