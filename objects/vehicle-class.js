'use strict';

class Vehicle {
  constructor (name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive () {
    return ('moving forward');
  }
  stop () {
    return ('stopping');
  }
}

class Car extends Vehicle {
  constructor (name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor (name) {
    super();
    this.name = name;
    this.wheels = 2;
  }
  wheelie () {
    return ('Wheee!');
  }
}

class FlyingVehicle extends Vehicle {
  constructor (name, passengers) {
    super();
    this.name = name;
    this.passengers = passengers;
  }
}

class Chinook extends FlyingVehicle {
  constructor (name, passengers) {
    super();
    this.name = name;
    this.passengers = passengers;
  }
}

module.exports = {Car, Motorcycle, Chinook};
