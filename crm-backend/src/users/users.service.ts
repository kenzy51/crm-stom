import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create({ ...dto, listens: 0 });
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateUser(id: string, dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, dto, { new: true });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.userModel.findByIdAndRemove(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
  async banUser(id: string): Promise<User> {
    const user = await this.getUserById(id);
    if (user) {
      user.blackList = true;
      await user.save();
      return user;
    } else {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
  async removeFromBan(id: string): Promise<User> {
    const user = await this.getUserById(id);
    if (user) {
      user.blackList = false;
      await user.save();
      return user;
    } else {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
