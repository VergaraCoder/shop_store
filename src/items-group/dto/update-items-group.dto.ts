import { PartialType } from '@nestjs/mapped-types';
import { CreateItemsGroupDto } from './create-items-group.dto';

export class UpdateItemsGroupDto extends PartialType(CreateItemsGroupDto) {}
