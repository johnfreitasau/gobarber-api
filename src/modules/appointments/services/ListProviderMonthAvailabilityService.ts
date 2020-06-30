// import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';
import '@modules/appointments/infra/http/routes/appointments.routes';
// import AppError from '@shared/errors/AppError';
// import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
// import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  availability: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
      { provider_id, year, month },
    );

    console.log('<<<');
    console.log(appointments);
    console.log('>>>');

    return [
      {
        day: 1,
        availability: false,
      },
    ];
  }
}

export default ListProviderMonthAvailabilityService;
