// import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
// import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
// import { zonedTimeToUtc } from 'date-fns-tz';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailabilityService: ListProviderDayAvailabilityService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailabilityService = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 9, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 11, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 12, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 13, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 16, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 20, 17, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user1',
      date: new Date(2020, 4, 21, 11, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 21, 11).getTime();
    });

    const availability = await listProviderDayAvailabilityService.execute({
      provider_id: 'user',
      day: 21,
      month: 5,
      year: 2020,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 11, available: false },
        { hour: 12, available: true },
        { hour: 13, available: true },
        { hour: 14, available: true },
        { hour: 15, available: true },
        { hour: 16, available: true },
        { hour: 17, available: true },
      ]),
    );
  });
});
