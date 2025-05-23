import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategoryProductRepository } from 'src/common/utils/interface/repo/category-product.repo.interface';
import { CategoryProduct } from '../entities/category-product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCategoryProductDto } from '../dto/create-category-product.dto';
import { UpdateCategoryProductDto } from '../dto/update-category-product.dto';

@Injectable()
export class CategoryProductRepository implements ICategoryProductRepository {
  constructor(
    @InjectRepository(CategoryProduct)
    private cateogoryProductRepo: Repository<CategoryProduct>,
  ) {}

  async create(data: CreateCategoryProductDto): Promise<CategoryProduct> {
    const dataCreate: CategoryProduct = this.cateogoryProductRepo.create(data);
    await this.cateogoryProductRepo.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<CategoryProduct[]> {
    return await this.cateogoryProductRepo.find();
  }

  async findOne(id: number): Promise<CategoryProduct> {
    return await this.cateogoryProductRepo.findOneBy({ id });
  }

  async update(
    id: number,
    dataUpdate: UpdateCategoryProductDto,
  ): Promise<boolean> {
    const { affected }: UpdateResult = await this.cateogoryProductRepo.update(
      id,
      dataUpdate,
    );
    return affected > 0;
  }

  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult =
      await this.cateogoryProductRepo.delete(id);
    return affected > 0;
  }
}
