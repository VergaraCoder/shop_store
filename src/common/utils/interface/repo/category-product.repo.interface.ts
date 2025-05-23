import { CreateCategoryProductDto } from 'src/category-product/dto/create-category-product.dto';
import { UpdateCategoryProductDto } from 'src/category-product/dto/update-category-product.dto';
import { CategoryProduct } from 'src/category-product/entities/category-product.entity';

export interface ICategoryProductRepository {
  create(data: CreateCategoryProductDto): Promise<CategoryProduct>;
  findAll(): Promise<CategoryProduct[]>;
  findOne(id: number): Promise<CategoryProduct>;
  update(id: number, dataUpdate: UpdateCategoryProductDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
