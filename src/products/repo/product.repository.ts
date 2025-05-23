import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductRepository } from 'src/common/utils/interface/repo/product.repo.interface';
import { Product } from '../entities/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async create(data: CreateProductDto): Promise<Product> {
    const dataCreate: Product = this.productRepo.create(data);
    await this.productRepo.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepo.findOneBy({ id });
  }

  async update(id: number, dataUpdate: UpdateProductDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.productRepo.update(
      id,
      dataUpdate,
    );
    return affected !== 0;
  }

  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.productRepo.delete(id);
    return affected !== 0;
  }
}
