import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(moto:IMotorcycle) {
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status;
    this.buyValue = moto.buyValue;
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}