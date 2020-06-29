import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('showProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const provider1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '12345',
    });

    const provider2 = await fakeUsersRepository.create({
      name: 'John Fre',
      email: 'john.fre@gmail.com',
      password: '12345',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'John Cam',
      email: 'john.cam@gmail.com',
      password: '12345',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([provider1, provider2]);
  });
});
