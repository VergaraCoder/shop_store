import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IItemsRepository } from 'src/common/utils/interface/repo/item.repo.interface';
import { ItemsGroup } from '../entities/items-group.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateItemsGroupDto } from '../dto/create-items-group.dto';
import { UpdateItemsGroupDto } from '../dto/update-items-group.dto';

@Injectable()
export class ItemsRepository implements IItemsRepository {
  constructor(
    @InjectRepository(ItemsGroup)
    private ItemsGroupRepo: Repository<ItemsGroup>,
  ) {}

  async create(data: CreateItemsGroupDto): Promise<ItemsGroup> {
    const dataCreate: ItemsGroup = this.ItemsGroupRepo.create(data);
    await this.ItemsGroupRepo.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<ItemsGroup[]> {
    return await this.ItemsGroupRepo.find();
  }

  async findOne(id: number): Promise<ItemsGroup> {
    return await this.ItemsGroupRepo.findOneBy({ id });
  }

  async update(id: number, dataUpdate: UpdateItemsGroupDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.ItemsGroupRepo.update(
      id,
      dataUpdate,
    );
    return affected > 0;
  }

  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.ItemsGroupRepo.delete(id);
    return affected > 0;
  }
}
