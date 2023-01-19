import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(veh:IVehicle) {
    this.id = veh.id;
    this.model = veh.model;
    this.year = veh.year;
    this.color = veh.color;
    this.status = veh.status;
    this.buyValue = veh.buyValue;
  }
}