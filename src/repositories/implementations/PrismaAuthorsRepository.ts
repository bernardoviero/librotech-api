import { PrismaClient } from '@prisma/client';
import { IAuthorsRepository } from '../IAuthorsRepository';
import { Author } from '../../entities/Author';

const prisma = new PrismaClient();

export class PrismaAuthorsRepository implements IAuthorsRepository {

  async findAuthorByName(name: string): Promise<Author | null> {
    const author = await prisma.authors.findFirst({
      where: {
        name: name,
      },
    });

    return author as Author | null;
  }

  async save(author: Author): Promise<Author> {
    await prisma.authors.create({
      data: {
        id: author.id,
        name: author.name,
        nationality: author.nationality,
        active: author.active
      },
    });

    return author;
  }
}