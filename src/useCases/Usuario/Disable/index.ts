import { TokenJWT } from "../../../providers/implementations/TokenJWT";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";

const prismaUsersRepository = new PrismaUsersRepository;
const tokenJWT = new TokenJWT;

const userUseCase = new UserUseCase(
    prismaUsersRepository,
    tokenJWT
)

const disableUserController = new UserController(
    userUseCase
)

export { userUseCase, disableUserController }