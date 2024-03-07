import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserRequestDTO } from "./UserDTO";

export class UserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(id: string) {
    const user = await this.usersRepository.findUserById(id);

    if (!user) {
      throw new Error('User not exists.');
    }

    return user
  }
}