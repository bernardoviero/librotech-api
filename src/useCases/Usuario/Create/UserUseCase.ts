import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IPasswordProvider } from "../../../providers/IPasswordProvider";
import { IUserRequestDTO } from "./UserDTO";

export class UserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordProvider: IPasswordProvider
  ) { }

  async execute(data: IUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);
    const password = await this.passwordProvider.encryptPassword(data.senha);
    data.senha = password;

    await this.usersRepository.save(user)
  }
}