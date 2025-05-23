import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategoryRepository } from 'src/common/utils/interface/repo/category.repo.interface';
import { Category } from '../entities/category.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(data: CreateCategoryDto): Promise<Category> {
    const dataCreate: Category = this.categoryRepo.create(data);
    await this.categoryRepo.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepo.find();
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoryRepo.findOneBy({ id });
  }

  async update(id: number, dataUpdate: UpdateCategoryDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.categoryRepo.update(
      id,
      dataUpdate,
    );
    return affected !== 0;
  }

  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.categoryRepo.delete(id);
    return affected !== 0;
  }
}
