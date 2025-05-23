import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsGroupService } from './items-group.service';
import { CreateItemsGroupDto } from './dto/create-items-group.dto';
import { UpdateItemsGroupDto } from './dto/update-items-group.dto';

@Controller('items-group')
export class ItemsGroupController {
  constructor(private readonly itemsGroupService: ItemsGroupService) {}

  @Post()
  create(@Body() createItemsGroupDto: CreateItemsGroupDto) {
    return this.itemsGroupService.create(createItemsGroupDto);
  }

  @Get()
  findAll() {
    return this.itemsGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemsGroupDto: UpdateItemsGroupDto) {
    return this.itemsGroupService.update(+id, updateItemsGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsGroupService.remove(+id);
  }
}
