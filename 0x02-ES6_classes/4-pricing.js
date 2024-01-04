// The Currency will be used laater
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Invalid currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency_name} (${this._currency_code})`;
  }

  static convertPrice(amount, conversionRate) {
    return `amount * conversionRate`;
  }
}
