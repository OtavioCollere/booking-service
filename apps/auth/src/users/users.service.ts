import { Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dtos/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository : UsersRepository) {}

  async create(createUserDto : CreateUserDto) {
    return this.usersRepository.create(createUserDto)
  }
}
