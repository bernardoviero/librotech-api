import { User } from '../services';
import validator from 'validator';

export class UserValidator {
	validarDadosCriacaoUsuario(user: User): void {
		if (!user.nome || !user.email || !user.senha) {
			throw new Error('Nome, email e senha são obrigatórios');
		}

		const emailValido = validator.isEmail(user.email);
		const senhaValida = validator.isStrongPassword(user.senha);

		if (!emailValido) {
			throw new Error('Email inválido');
		}

		if (!senhaValida) {
			throw new Error('Senha fraca. A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais');
		}
	}
}
