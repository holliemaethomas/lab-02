'use strict';

class SeaCreatures {
  constructor(name, swims) {
    this.name = name;
    this.swims = swims;
  }
  swims() {
    return ('To and fro, stop and go, thats what makes the world go round!');
  }
  eldritch() {
    return ('Cthulu');
  }
}

class Fish extends SeaCreatures {
  constructor(name) {
    super();
    this.name = name;
    this.swims = true;
  }
}

class Lobster extends SeaCreatures {
  constructor(name) {
    super();
    this.name = name;
    this.swims = true;
  }
  eldritch() {
    return ('Cthulu');
  }
}


module.exports = { Fish, Lobster };