import { Module } from '@nestjs/common';
import { CategoryProductService } from './category-product.service';
import { CategoryProductController } from './category-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryProduct } from './entities/category-product.entity';
import { Symbol_Category_Product } from 'src/common/utils/symbol/category-product.symbol';
import { CategoryProductRepository } from './repo/category-product.repo';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryProduct])],
  controllers: [CategoryProductController],
  providers: [
    CategoryProductService,
    {
      provide: Symbol_Category_Product,
      useClass: CategoryProductRepository,
    },
  ],
  exports: [TypeOrmModule, CategoryProductService],
})
export class CategoryProductModule {}
