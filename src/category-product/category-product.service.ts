import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryProductDto } from './dto/create-category-product.dto';
import { UpdateCategoryProductDto } from './dto/update-category-product.dto';
import { Result } from 'src/common/utils/patternResult/patternResult';
import { CustomHttpException } from 'src/common/errors/error.custom';
import { CategoryProduct } from './entities/category-product.entity';
import { ICategoryProductRepository } from 'src/common/utils/interface/repo/category-product.repo.interface';
import { Symbol_Category_Product } from 'src/common/utils/symbol/category-product.symbol';
import { CATEGORY_PRODUCT_ERRORS } from './constants/category-constant.errors';

@Injectable()
export class CategoryProductService {
  constructor(
    @Inject(Symbol_Category_Product)
    private CategoryProductRepo: ICategoryProductRepository,
  ) {}
  async create(data: CreateCategoryProductDto): Promise<CategoryProduct> {
    try {
      return await this.CategoryProductRepo.create(data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<CategoryProduct[]>> {
    const registers: CategoryProduct[] =
      await this.CategoryProductRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException(CATEGORY_PRODUCT_ERRORS.NOT_FOUNDS, 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<CategoryProduct>> {
    const register: CategoryProduct =
      await this.CategoryProductRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException(CATEGORY_PRODUCT_ERRORS.NOT_FOUND, 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(
    id: number,
    dataUpdate: UpdateCategoryProductDto,
  ): Promise<Result<boolean>> {
    const result: boolean = await this.CategoryProductRepo.update(
      id,
      dataUpdate,
    );
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException(CATEGORY_PRODUCT_ERRORS.NOT_FOUND, 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<boolean>> {
    const result: boolean = await this.CategoryProductRepo.delete(id);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException(CATEGORY_PRODUCT_ERRORS.NOT_FOUND, 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }
}
