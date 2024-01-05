const cloneSymbol = Symbol('clone');
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;

    this[cloneSymbol] = Symbol('clone');
  }

  get brand() {
    return this.brand;
  }

  get motor() {
    return this.motor;
  }

  get color() {
    return this.color;
  }

  cloneCar() {
    const clonedCar = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this,
    );

    clonedCar[cloneSymbol] = Symbol('clone');

    return clonedCar;
  }
}
