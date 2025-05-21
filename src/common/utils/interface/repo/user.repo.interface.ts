import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';

export interface IUserRepository {
  create(data: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  update(id: number, dataUpdate: UpdateUserDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
