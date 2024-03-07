import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

const prisma = new PrismaClient();

export class PrismaUsersRepository implements IUsersRepository {

  async disable(ativo: boolean, userId: string): Promise<void> {
    await prisma.usuario.update({
      where: {
        id: userId,
      },
      data: {
        ativo: ativo,
      }
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });

    return user
  }

  async save(user: User): Promise<void> {
    await prisma.usuario.create({
      data: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        ativo: user.ativo
      },
    });
  }
}