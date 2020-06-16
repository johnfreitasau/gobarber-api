// import AppError from '@shared/errors/AppError';
// import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
// import CreateAppointmentService from './CreateAppointmentService';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('CreateUser', () => {
  it('Should be able to create a user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '12345',
    });

    expect(user).toHaveProperty('id');
  });
});
