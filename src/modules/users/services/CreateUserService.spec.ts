import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('CreateUser', () => {
  it('Should be able to create a user.', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '12345',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create the same user twice.', async () => {
    const fakeUSersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUSersRepository);

    await createUserService.execute({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '12345',
    });

    expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
