import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Symbol_Product } from 'src/common/utils/symbol/product.symbol';
import { ProductRepository } from './repo/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: Symbol_Product,
      useClass: ProductRepository,
    },
  ],
  exports: [TypeOrmModule, ProductsService],
})
export class ProductsModule {}
