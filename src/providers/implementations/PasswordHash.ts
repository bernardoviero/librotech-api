import { IPasswordProvider } from "../IPasswordProvider";
import * as bcrypt from 'bcrypt';

export class PasswordHash implements IPasswordProvider {
  private static readonly pepper: string = process.env.PEPPER || '';

  async encryptPassword(password: string): Promise<string> {
    try {
      const pepperedPassword = password + PasswordHash.pepper;
      const hash = await bcrypt.hash(pepperedPassword, 12);
      return hash;
    } catch (error) {
      console.error(error);
      throw new Error('Error generating hash password.');
    }
  }

  async comparePassword(dataPassword: string, userPassword: string): Promise<boolean> {
    try {
      const compare = await bcrypt.compare(dataPassword, userPassword);
      return compare;
    } catch (error) {
      console.error(error);
      throw new Error('Error comparing password.');
    }
  }
}