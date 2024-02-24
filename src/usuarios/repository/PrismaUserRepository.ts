import { PrismaClient, Usuario } from '@prisma/client';
import { UserRepository } from './UserRepository';

const prisma = new PrismaClient();

export class PrismaUserRepository implements UserRepository {
    async saveUser(userData: any): Promise<Usuario> {
        try {
            const savedUser = await prisma.usuario.create({
                data: userData,
            });
            return savedUser;
        } catch (error) {
            throw new Error('Erro ao salvar o usuário: ' + error);
        } finally {
            await prisma.$disconnect();
        }
    }
}