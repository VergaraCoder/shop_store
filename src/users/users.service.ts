import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserService } from 'src/common/utils/interface/services/user.service.interface';
import { User } from './entities/user.entity';
import { Result } from 'src/common/utils/patternResult/patternResult';
import { IUserRepository } from 'src/common/utils/interface/repo/user.repo.interface';
import { CustomHttpException } from 'src/common/errors/error.custom';
import { USER_ERRORS } from './constant/user-error.contants';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @Inject('USER_REPO')
    private userRepo: IUserRepository,
  ) {}
  async create(data: CreateUserDto): Promise<User> {
    try {
      return await this.userRepo.create(data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<User[]>> {
    const registers: User[] = await this.userRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT USERS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<User>> {
    const register: User = await this.userRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException(USER_ERRORS.NOT_FOUND, 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(
    id: number,
    dataUpdate: UpdateUserDto,
  ): Promise<Result<boolean>> {
    const result: boolean = await this.userRepo.update(id, dataUpdate);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException(USER_ERRORS.NOT_FOUND, 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<boolean>> {
    const result: boolean = await this.userRepo.delete(id);
    if (!result) {
      return {
        data: null,
        error: new CustomHttpException(USER_ERRORS.NOT_FOUND, 404),
      };
    }
    return {
      data: result,
      error: null,
    };
  }
}
