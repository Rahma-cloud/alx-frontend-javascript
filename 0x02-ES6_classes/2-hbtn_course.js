export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse.validateName(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateLength(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.validateStudents(newStudents);
  }

  static validateName(name) {
    if (typeof name === 'string') {
      return name;
    }
    throw new TypeError('Name must be a string');
  }

  static validateLength(length) {
    if (typeof length === 'number') {
      return length;
    }
    throw new TypeError('Length must be a number');
  }

  static validateStudents(students) {
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      return students;
    }
    throw new TypeError('Students must be an array of strings');
  }
}
