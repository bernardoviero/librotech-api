import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id!: string;

  public nome: string;
  public email: string;
  public senha: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.nome = props.nome;
    this.email = props.email;
    this.senha = props.senha;

    if (!id) {
      this.id = uuidv4();
    }
  }
}