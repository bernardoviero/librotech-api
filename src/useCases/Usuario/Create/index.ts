import { EncryptPassword } from "../../../providers/implementations/EncryptPassword";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";

const prismaUsersRepository = new PrismaUsersRepository
const encryptPassword = new EncryptPassword

const userUseCase = new UserUseCase(
    prismaUsersRepository,
    encryptPassword
)

const userController = new UserController(
    userUseCase
)

export { userUseCase, userController }