'use strict';

const SeaCreatures = function (name, swims) {
  this.name = name;
  this.swims = swims;
};

SeaCreatures.prototype.swims = () => {
  return 'To and fro, stop and go, thats what makes the world go round!';
};

SeaCreatures.prototype.eldritch = () => {
  return 'Cthulu';
};

// Fish Constructor
const Fish = function (name) {
  SeaCreatures.call(this, name, true);
};

Fish.prototype = new SeaCreatures();

const Lobster = function (name) {
  SeaCreatures.call(this, name, true);
};

Lobster.prototype = new SeaCreatures();

Lobster.prototype.biteME = () => {
  return 'OUCH';
};

module.exports = { Fish, Lobster };