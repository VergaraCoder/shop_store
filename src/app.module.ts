import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [UsersModule, ProductsModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
