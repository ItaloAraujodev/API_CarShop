import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarServices from '../../../src/Services/CarService';

const array = [{
  id: '633ec9fa3df977e30e993495',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
},

{
  id: '633ec9fa3df977e30e993492',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}];

describe('Test the Service layer', function () {
  it('Creates a new Cars object successfully', async function () {
    const arr1 = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const arr2: ICar = {
      id: '633ec9fa3df977e30e993492',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(arr2);
    const service = new CarServices();
    const result = await service.create(arr1);

    expect(result).to.deep.equal(arr2);
  });

  it('Search all registered cars', async function () {
    sinon.stub(Model, 'find').resolves(array);

    const service = new CarServices();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(array);
  });

  it('Verify car by id', async function () {
    const arr1: Car = new Car({
      id: '633ec9fa3df977e30e993492',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findById').resolves(arr1);

    const service = new CarServices();
    const result = await service.findId('633ec9fa3df977e30e993492');

    expect(result).to.be.deep.equal(arr1);
  });
});