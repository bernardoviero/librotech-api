import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserRequestDTO } from "./UserDTO";

export class UserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(data: IUserRequestDTO) {
    const user = await this.usersRepository.findUserById(data.id);

    if (!user) {
      throw new Error('User not exists.');
    }

    const userUpdate: User = await this.usersRepository.update(data);

    return userUpdate;
  }
}