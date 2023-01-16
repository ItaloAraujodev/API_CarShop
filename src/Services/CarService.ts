import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarServices {
  private createDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carsODM = new CarODM();
    const carnew = await carsODM.create(car);
    return this.createDomain(carnew);
  }

  public async findAll() {
    const carsODM = new CarODM();
    const carnew = await carsODM.findAll();
    const cars = carnew.map((car) => this.createDomain(car));
    return cars;
  }

  public async findId(car: string) {
    const carsODM = new CarODM();
    const carnew = await carsODM.findId(car);
    return this.createDomain(carnew);
  }
}
export default CarServices;