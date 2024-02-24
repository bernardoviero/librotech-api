import { Request, Response } from 'express';
import { UserService, UserValidator, PrismaUserRepository, HashService } from '../services';

export class UserController {
	userValidator = new UserValidator();

	constructor(private userService: UserService = new UserService(new PrismaUserRepository(), new HashService())) { }

	async createUser(req: Request, res: Response) {
		try {
			console.log(req.body);
			const dadosUsuario = req.body;
			this.userValidator.validarDadosCriacaoUsuario(dadosUsuario);
			const novoUsuario = await this.userService.createUser(dadosUsuario);
			return res.status(201).json(novoUsuario);
		} catch (error: any) {
			console.error('Erro ao validar dados de criação de usuário:', error.message);
			return res.status(400).json({ error: error.message });
		}
	}
}