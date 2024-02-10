export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get getStudents() {
    return this._students;
  }

  set name(name) {
    if (typeof name === String) {
      this._name = name;
    } else {
      console.log(TypeError("Name must be a string"));
    }
  }

  set length(length) {
    if (typeof length === Number) {
      this._length = length;
    } else {
      console.log(TypeError("Length must be a number"));
    }
  }
  set students(students) {
    if (typeof students === Array) {
      this._students = students;
    } else {
      console.log(TypeError("Students must be an array"));
    }
  }
}
