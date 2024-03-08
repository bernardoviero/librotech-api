import { ITokenProvider } from "../../../providers/ITokenProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserRequestDTO } from "./UserDTO";

export class UserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider
  ) { }

  async execute(data: IUserRequestDTO) {
    const user = await this.usersRepository.findUserByEmail(data.email);
    const verifyToken = await this.tokenProvider.verifyToken(data.token);

    if (!user) {
      throw new Error('User not exists.');
    }
    if (!verifyToken) {
      throw new Error('Invalid token.');
    }

    await this.usersRepository.disable(data.ativo, user.id)
  }
}