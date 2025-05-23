import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Result } from 'src/common/utils/patternResult/patternResult';
import { CustomHttpException } from 'src/common/errors/error.custom';
import { ICategoryRepository } from 'src/common/utils/interface/repo/category.repo.interface';
import { Category } from './entities/category.entity';
import { Symbol_Category } from 'src/common/utils/symbol/category.symbol';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(Symbol_Category)
    private CategoryRepo: ICategoryRepository,
  ) {}
  async create(data: CreateCategoryDto): Promise<Category> {
    try {
      return await this.CategoryRepo.create(data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<Category[]>> {
    const registers: Category[] = await this.CategoryRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT CategoryS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<Category>> {
    const register: Category = await this.CategoryRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException('Category NOT FOUND', 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(
    id: number,
    dataUpdate: UpdateCategoryDto,
  ): Promise<Result<boolean>> {
    const result: boolean = await this.CategoryRepo.update(id, dataUpdate);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException('Category NOT FOUND', 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<boolean>> {
    const result: boolean = await this.CategoryRepo.delete(id);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException('Category NOT FOUND', 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }
}
