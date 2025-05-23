import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto';
import { Category } from 'src/category/entities/category.entity';

export interface ICategoryRepository {
  create(data: CreateCategoryDto): Promise<Category>;
  findAll(): Promise<Category[]>;
  findOne(id: number): Promise<Category>;
  update(id: number, dataUpdate: UpdateCategoryDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
