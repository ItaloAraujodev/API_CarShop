import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';

describe('Test the Service Motocycle layer', function () {
  it('Creates a new Motorcycle object Successfully', async function () {
    const inputMoto = {
      model: 'Honda Cb 500f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const outputMoto: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,

    };
    sinon.stub(Model, 'create').resolves(outputMoto);
    const service = new MotorcycleServices();
    const result = await service.create(inputMoto);

    expect(result).to.deep.equal(outputMoto);
  });
});