import { User } from '../services';

export interface UserRepository {
	saveUser(user: User): Promise<User>;
}