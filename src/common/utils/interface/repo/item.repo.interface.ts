import { CreateItemsGroupDto } from 'src/items-group/dto/create-items-group.dto';
import { UpdateItemsGroupDto } from 'src/items-group/dto/update-items-group.dto';
import { ItemsGroup } from 'src/items-group/entities/items-group.entity';

export interface IItemsRepository {
  create(data: CreateItemsGroupDto): Promise<ItemsGroup>;
  findAll(): Promise<ItemsGroup[]>;
  findOne(id: number): Promise<ItemsGroup>;
  update(id: number, dataUpdate: UpdateItemsGroupDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
