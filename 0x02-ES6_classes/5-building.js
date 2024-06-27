export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = value;
  }

  // Method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
