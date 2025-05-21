import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/common/utils/interface/repo/user.repo.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const dataCreate: User = this.userRepo.create(data);
    await this.userRepo.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepo.findOneBy({ id });
  }

  async update(id: number, dataUpdate: UpdateUserDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.userRepo.update(
      id,
      dataUpdate,
    );
    return affected > 0;
  }

  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.userRepo.delete(id);
    return affected > 0;
  }
}
