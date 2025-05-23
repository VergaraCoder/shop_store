import { Inject, Injectable } from '@nestjs/common';
import { CreateItemsGroupDto } from './dto/create-items-group.dto';
import { UpdateItemsGroupDto } from './dto/update-items-group.dto';
import { CustomHttpException } from 'src/common/errors/error.custom';
import { Result } from 'src/common/utils/patternResult/patternResult';
import { ITEMS_ERROR } from './constants/item.error';
import { ItemsGroup } from './entities/items-group.entity';
import { IItemsRepository } from 'src/common/utils/interface/repo/item.repo.interface';
import { Symbol_Items } from 'src/common/utils/symbol/items.symbol';

@Injectable()
export class ItemsGroupService {
  constructor(
    @Inject(Symbol_Items)
    private ItemsGroupRepo: IItemsRepository,
  ) {}
  async create(data: CreateItemsGroupDto): Promise<ItemsGroup> {
    try {
      return await this.ItemsGroupRepo.create(data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<ItemsGroup[]>> {
    const registers: ItemsGroup[] = await this.ItemsGroupRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException(ITEMS_ERROR.NOT_FOUNDS, 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<ItemsGroup>> {
    const register: ItemsGroup = await this.ItemsGroupRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException(ITEMS_ERROR.NOT_FOUND, 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(
    id: number,
    dataUpdate: UpdateItemsGroupDto,
  ): Promise<Result<boolean>> {
    const result: boolean = await this.ItemsGroupRepo.update(id, dataUpdate);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException(ITEMS_ERROR.NOT_FOUND, 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<boolean>> {
    const result: boolean = await this.ItemsGroupRepo.delete(id);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException(ITEMS_ERROR.NOT_FOUND, 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }
}
