import { injectable, inject } from 'tsyringe';
// import User from '@modules/users/infra/typeorm/entities/User';
//  import AppError from '@shared/errors/AppError';
// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
// import AppError from '@shared/errors/AppError';
import { isAfter, addHours } from 'date-fns';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';
import IHashProvider from '../providers/models/IHashProvider';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private userHashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('Token not found.');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    const tokenCreatedDate = userToken.created_at;
    const compareDate = addHours(tokenCreatedDate, 2);

    // console.log('1');
    // console.log(tokenCreatedDate);
    // console.log('2');
    // console.log(compareDate);
    // console.log('3');
    // console.log(isAfter(Date.now(), compareDate));
    // console.log('4Date.now():');
    // console.log(new Date(Date.now()));
    // console.log('userToken:');
    // console.log(userToken);
    // console.log('User:');
    // console.log(user);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError(
        'Email token has been expired. Please try to reset again.',
      );
    }

    user.password = await this.userHashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
