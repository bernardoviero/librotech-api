export interface IPasswordProvider {
  encryptPassword(password: string): Promise<string>;
  comparePassword(dataPassword: string, userPassword: string): Promise<boolean>;
}