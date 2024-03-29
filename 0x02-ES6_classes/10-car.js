const cloneSymbol = Symbol('clone');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneSymbol] = Symbol('clone');
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
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
