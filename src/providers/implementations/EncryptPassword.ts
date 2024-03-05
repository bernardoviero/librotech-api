import { IPasswordProvider } from "../IPasswordProvider";
import * as bcrypt from 'bcrypt';

export class EncryptPassword implements IPasswordProvider {
    async encryptPassword(password: string): Promise<string> {
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (error) {
            console.error(error);
            throw new Error('Error generating hash password.');
        }
    }
}