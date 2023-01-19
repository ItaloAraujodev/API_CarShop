import express from 'express';
import carRouter from './CarRoutes';
import motoRouter from './Motorcycle';

const routes = express.Router();

routes.use('/cars', carRouter);
routes.use('/motorcycles', motoRouter);

export default routes;