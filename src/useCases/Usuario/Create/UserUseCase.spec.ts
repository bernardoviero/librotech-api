import { IPasswordProvider } from "../../../providers/IPasswordProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserRequestDTO } from "./UserDTO";
import { UserUseCase } from "./UserUseCase";

describe('UserUseCase', () => {
  let userUseCase: UserUseCase;
  let mockUsersRepository: IUsersRepository;
  let mockPasswordProvider: IPasswordProvider;

  beforeEach(() => {


    mockUsersRepository = {
      findByEmail: jest.fn(),
      save: jest.fn(),
    };

    mockPasswordProvider = {
      encryptPassword: jest.fn(),
    };

    userUseCase = new UserUseCase(mockUsersRepository, mockPasswordProvider);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', async () => {
    const userData: IUserRequestDTO = {
      nome: 'Test User',
      email: 'test@example.com',
      senha: '123senha123',
    };

    (mockUsersRepository.findByEmail as jest.Mock).mockResolvedValue(null);

    (mockPasswordProvider.encryptPassword as jest.Mock).mockResolvedValue('hashedPassword123');

    await userUseCase.execute(userData);

    expect(mockUsersRepository.findByEmail).toHaveBeenCalledWith(userData.email);
    expect(mockPasswordProvider.encryptPassword).toHaveBeenCalledWith(userData.senha);
    expect(mockUsersRepository.save).toHaveBeenCalledWith(expect.objectContaining({
      nome: userData.nome,
      email: userData.email,
      senha: 'hashedPassword123',
    }));
  });

  it('should throw error when trying to create a user with an existing email', async () => {
    const userData: IUserRequestDTO = {
      nome: 'Test User',
      email: 'existing@example.com',
      senha: '123senha123',
    };

    (mockUsersRepository.findByEmail as jest.Mock).mockResolvedValue({
      id: 'existingUserId',
      nome: 'Existing User',
      email: 'existing@example.com',
      senha: 'hashedPassword123',
    });

    await expect(userUseCase.execute(userData)).rejects.toThrowError('User already exists.');

    expect(mockUsersRepository.findByEmail).toHaveBeenCalledWith(userData.email);
    expect(mockPasswordProvider.encryptPassword).not.toHaveBeenCalled();
    expect(mockUsersRepository.save).not.toHaveBeenCalled();
  });
});
