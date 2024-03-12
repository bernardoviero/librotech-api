import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { IUserRequestDTO } from '../../useCases/Usuario/Update/UserDTO';

const prisma = new PrismaClient();

export class PrismaUsersRepository implements IUsersRepository {

  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async update(updateUser: IUserRequestDTO): Promise<User> {
    const user = await prisma.users.update({
      where: {
        id: updateUser.id,
      },
      data: {
        id: updateUser.id,
        name: updateUser.name,
        email: updateUser.email
      }
    });

    return user;
  }

  async disable(active: boolean, userId: string): Promise<void> {
    await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        active: active,
      }
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  async save(user: User): Promise<User> {
    await prisma.users.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        active: user.active
      },
    });

    return user;
  }
}