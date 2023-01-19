import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ServiceMotorcycle from '../Services/MotorcycleServices';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ServiceMotorcycle;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ServiceMotorcycle();
  }

  public async createMoto() {
    const body : IMotorcycle = { ...this.req.body };
    try {
      const createdNew = await this.service.create(body);
      return this.res.status(201).json(createdNew);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const findMoto = await this.service.findAll();
      return this.res.status(200).json(findMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findId() {
    const { id } = this.req.params;
    try {
      const moto = await this.service.findId(id);
      if (!moto) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(moto);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;