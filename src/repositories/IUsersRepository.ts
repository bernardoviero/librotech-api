import { User } from "../entities/User";
import { IUserRequestDTO } from "../useCases/Usuario/Update/UserDTO";

export interface IUsersRepository {
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
  disable(ativo: boolean, userId: string): Promise<void>;
  update(user: IUserRequestDTO): Promise<User>;
}