import { Module } from '@nestjs/common';
import { ItemsGroupService } from './items-group.service';
import { ItemsGroupController } from './items-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsGroup } from './entities/items-group.entity';
import { UsersModule } from 'src/users/users.module';
import { Symbol_Items } from 'src/common/utils/symbol/items.symbol';
import { ItemsRepository } from './repo/items.repository';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemsGroup]),
    UsersModule,
    CategoryModule,
  ],
  controllers: [ItemsGroupController],
  providers: [
    ItemsGroupService,
    {
      provide: Symbol_Items,
      useClass: ItemsRepository,
    },
  ],
  exports: [TypeOrmModule, ItemsGroupService],
})
export class ItemsGroupModule {}
