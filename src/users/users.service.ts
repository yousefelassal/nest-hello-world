import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Alice Caeiro', age: 20 },
    { id: 3, name: 'Who Knows', age: 20 },
  ];

  create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(age?: string) {
    if (age) {
      return this.users.filter((user) => user.age === +age);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });
  }

  remove(id: number) {
    return this.users.filter((user) => user.id !== id);
  }
}
