import bcrypt from 'bcrypt';

export class HashService {
    private saltRounds: number = 10;

    async hashPassword(password: string): Promise<string> {
        const hashedPassword = await bcrypt.hash(password, this.saltRounds);
        return hashedPassword;
    }
}