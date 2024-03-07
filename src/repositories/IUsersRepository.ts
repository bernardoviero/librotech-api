import { User } from "../entities/User";

export interface IUsersRepository {
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
  disable(ativo: boolean, userId: string): Promise<void>;
}