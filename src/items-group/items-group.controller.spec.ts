import { Test, TestingModule } from '@nestjs/testing';
import { ItemsGroupController } from './items-group.controller';
import { ItemsGroupService } from './items-group.service';

describe('ItemsGroupController', () => {
  let controller: ItemsGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsGroupController],
      providers: [ItemsGroupService],
    }).compile();

    controller = module.get<ItemsGroupController>(ItemsGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
