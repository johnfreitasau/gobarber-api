// import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
// import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
// import { zonedTimeToUtc } from 'date-fns-tz';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailabilityService: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailabilityService = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability of the provider', async () => {
    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: zonedTimeToUtc(new Date(2020, 5, 20, 8, 0, 0), 'America/Sao_Paulo'),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 8, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 9, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 10, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 11, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 12, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 13, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 14, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 15, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 16, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 20, 17, 0, 0),
    // });

    // await fakeAppointmentsRepository.create({
    //   provider_id: 'user',
    //   date: new Date(2020, 5, 21, 8, 0, 0),
    // });

    // Scenario following node date server
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 19, 22, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 19, 23, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 0, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 1, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 2, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 3, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 4, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 5, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 6, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 20, 7, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 5, 21, 8, 0, 0),
    });

    const availaility = await listProviderMonthAvailabilityService.execute({
      provider_id: 'user',
      year: 2020,
      month: 6,
    });

    expect(availaility).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
