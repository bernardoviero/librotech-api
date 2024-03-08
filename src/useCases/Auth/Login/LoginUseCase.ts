import { IPasswordProvider } from "../../../providers/IPasswordProvider";
import { ITokenProvider } from "../../../providers/ITokenProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { LoginDTO } from "./LoginDTO";

export class LoginUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private passwordProvider: IPasswordProvider,
        private tokenProvider: ITokenProvider
    ) { }

    async execute(data: LoginDTO) {
        const user = await this.usersRepository.findUserByEmail(data.email);

        if (!user) {
            throw new Error('User not exists.');
        }

        const verifySenha = await this.passwordProvider.comparePassword(data.senha, user.senha);

        if (!verifySenha) {
            throw new Error('Incorrect password.');
        }

        data.token = await this.tokenProvider.generateToken(data.senha, data.email);

        return user;
    }
}