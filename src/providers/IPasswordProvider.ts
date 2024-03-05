export interface IPasswordProvider {
  encryptPassword(password: string): Promise<string>;
}