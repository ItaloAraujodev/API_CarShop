import { Router } from 'express';
import ControllerCar from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).CreateCar(),
);

routes.get(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).findAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new ControllerCar(req, res, next).findId(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new ControllerCar(req, res, next).updateCar(),
);

export default routes;