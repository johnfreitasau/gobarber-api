import { Router } from 'express';
// import { sign } from 'jsonwebtoken';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const userAuthenticate = new AuthenticateUserService();

  const { user, token } = await userAuthenticate.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
