import { User } from "../../../entities/User";
import { ITokenProvider } from "../../../providers/ITokenProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserRequestDTO } from "./UserDTO";

export class UserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider
  ) { }

  async execute(data: IUserRequestDTO) {
    const user = await this.usersRepository.findUserById(data.id);
    const verifyToken = await this.tokenProvider.verifyToken(data.token);

    if (!user) {
      throw new Error('User not exists.');
    }

    if (!verifyToken) {
      throw new Error('Invalid token.');
    }

    const userUpdate: User = await this.usersRepository.update(data);

    return userUpdate;
  }
}