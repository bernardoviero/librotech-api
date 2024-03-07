import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserRequestDTO } from "./UserDTO";

export class UserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(data: IUserRequestDTO) {
    const user = await this.usersRepository.findUserByEmail(data.email);

    if (!user) {
      throw new Error('User not exists.');
    }

    await this.usersRepository.disable(data.ativo, user.id)
  }
}