import { User, PrismaUserRepository, HashService, UserRepository } from '../services';
class UserService {
	constructor(private userRepository: UserRepository = new PrismaUserRepository(), private hashService: HashService) { }

	async createUser(user: User): Promise<User | null> {
		try {
			const senhaHash = await this.hashService.hashPassword(user.senha);

			const novoUsuario: User = {
				id: Math.floor(Math.random() * 1000),
				nome: user.nome,
				email: user.email,
				senha: senhaHash,
				dataCadastro: new Date()
			};

			const usuarioSalvo = await this.userRepository.saveUser(novoUsuario);

			return usuarioSalvo;
		} catch (error) {
			console.error('Erro ao criar usuário:', error);
			return null;
		}
	}
}

export { UserService };