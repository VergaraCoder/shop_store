import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Result } from '../../patternResult/patternResult';

export interface IUserService {
  create(data: CreateUserDto): Promise<User>;
  findAll(): Promise<Result<User[]>>;
  findOne(id: number): Promise<Result<User>>;
  update(id: number, dataUpdate: UpdateUserDto): Promise<Result<boolean>>;
  delete(id: number): Promise<Result<boolean>>;
}
