import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import ensureAuthenticated from '../middleware/ensureAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.use(ensureAuthenticated);
routes.use('/appointments', appointmentsRouter);

export default routes;
