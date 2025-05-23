import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Result } from 'src/common/utils/patternResult/patternResult';
import { CustomHttpException } from 'src/common/errors/error.custom';
import { IProductRepository } from 'src/common/utils/interface/repo/product.repo.interface';
import { Product } from './entities/product.entity';
import { Symbol_Product } from 'src/common/utils/symbol/product.symbol';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(Symbol_Product)
    private ProductRepo: IProductRepository,
  ) {}
  async create(data: CreateProductDto): Promise<Product> {
    try {
      return await this.ProductRepo.create(data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<Product[]>> {
    const registers: Product[] = await this.ProductRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT ProductS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<Product>> {
    const register: Product = await this.ProductRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException('Product NOT FOUND', 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(
    id: number,
    dataUpdate: UpdateProductDto,
  ): Promise<Result<boolean>> {
    const result: boolean = await this.ProductRepo.update(id, dataUpdate);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException('Product NOT FOUND', 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<boolean>> {
    const result: boolean = await this.ProductRepo.delete(id);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException('Product NOT FOUND', 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }
}
