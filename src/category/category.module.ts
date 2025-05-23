import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Symbol_Category } from 'src/common/utils/symbol/category.symbol';
import { CategoryRepository } from './repo/category.repo';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: Symbol_Category,
      useClass: CategoryRepository,
    },
  ],
  exports: [TypeOrmModule, CategoryService],
})
export class CategoryModule {}
