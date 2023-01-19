import { Router } from 'express';
import ControllerMotorcycles from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new ControllerMotorcycles(req, res, next).createMoto(),
  
);

routes.get(
  '/',
  (req, res, next) => new ControllerMotorcycles(req, res, next).findAll(),
);
  
routes.get(
  '/:id',
  (req, res, next) => new ControllerMotorcycles(req, res, next).findId(),
);

export default routes;