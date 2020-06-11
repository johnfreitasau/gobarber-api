import { Router } from 'express';
// import { sign } from 'jsonwebtoken';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();
  const { email, password } = request.body;

  const userAuthenticate = new AuthenticateUserService(usersRepository);

  const { user, token } = await userAuthenticate.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
