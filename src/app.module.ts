import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { CategoryProductModule } from './category-product/category-product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './common/db/db.config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConfig,
    }),
    UsersModule,
    ProductsModule,
    CategoryModule,
    CategoryProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
