export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Override the default string description
  toString() {
    return this._code;
  }
}
