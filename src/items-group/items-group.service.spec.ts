import { Test, TestingModule } from '@nestjs/testing';
import { ItemsGroupService } from './items-group.service';

describe('ItemsGroupService', () => {
  let service: ItemsGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsGroupService],
    }).compile();

    service = module.get<ItemsGroupService>(ItemsGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
