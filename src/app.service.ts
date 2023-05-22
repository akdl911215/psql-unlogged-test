import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {
    // this.createUsers();
  }

  public async createUsers() {
    await this.prisma.$transaction(async () => {
      return await this.prisma.users.create({
        data: {
          email: 'aaa',
          name: 'name1',
          age: 1,
        },
      });
    });
  }

  public async close() {}

  public async createUnLogged3() {
    await this.prisma.$transaction(async () => {});
  }
}
