import { PasswordHash } from "../../../providers/implementations/PasswordHash";
import { TokenJWT } from "../../../providers/implementations/TokenJWT";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const prismaUsersRepository = new PrismaUsersRepository;
const passwordHash = new PasswordHash;
const tokenJWT = new TokenJWT;

const loginUseCase = new LoginUseCase(
    prismaUsersRepository,
    passwordHash,
    tokenJWT
)

const loginController = new LoginController(
    loginUseCase
)

export { loginUseCase, loginController }