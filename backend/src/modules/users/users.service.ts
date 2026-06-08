import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async updateProfile(userId: string, updateData: Partial<User>) {
    await this.usersRepository.update(userId, updateData);
    return this.findById(userId);
  }

  async updateLastLogin(userId: string) {
    await this.usersRepository.update(userId, {
      lastLoginAt: new Date(),
    });
  }

  async getProfile(userId: string) {
    const user = await this.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    
    const { password, twoFactorSecret, ...profile } = user;
    return profile;
  }

  async updatePassword(userId: string, hashedPassword: string) {
    await this.usersRepository.update(userId, {
      password: hashedPassword,
    });
  }

  async enableTwoFactor(userId: string, secret: string) {
    await this.usersRepository.update(userId, {
      isTwoFactorEnabled: true,
      twoFactorSecret: secret,
    });
  }

  async disableTwoFactor(userId: string) {
    await this.usersRepository.update(userId, {
      isTwoFactorEnabled: false,
      twoFactorSecret: null,
    });
  }
}
