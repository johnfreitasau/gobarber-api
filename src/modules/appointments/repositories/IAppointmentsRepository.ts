import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentsDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
  listAllAppointmentsTest(): Promise<Appointment[]>;
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
