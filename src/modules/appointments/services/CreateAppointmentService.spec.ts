import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentService: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('It should be able to create a new appointment', async () => {
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '12345',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12345');
  });

  it('It should not be able to create a  two appointments at the same time', async () => {
    const appointmentDate = new Date(2020, 5, 14, 11);

    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: '12345',
    });

    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
