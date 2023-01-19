import { Router } from 'express';
import ControllerMotorcycles from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new ControllerMotorcycles(req, res, next).createMoto(),
);

export default routes;