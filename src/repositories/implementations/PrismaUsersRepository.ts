import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

const prisma = new PrismaClient();

export class PrismaUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return new User(user);
    } else {
      return null;
    }
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