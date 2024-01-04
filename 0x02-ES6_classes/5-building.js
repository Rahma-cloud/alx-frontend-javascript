export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building.');
    } else {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
