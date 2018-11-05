'use strict';

// Implement both Car and Motorcycle using a Javascript Factory Function (in the vehicle-factory.js file)

const SeaCreatures = () => ({
  swims() {
    return 'To and fro, stop and go, thats what makes the world go round!';
  },
  eldritch() {
    return 'Cthulu';
  },
});

function Fish(name) {
  let swims = true;
  console.log('Merlin');
  let Fish = Object.assign({}, { name }, { swims }, SeaCreatures());
  return Object.freeze(Fish);
}

function Lobster(name) {
  let swims = true;
  let Lobster = Object.assign({}, { name }, { swims }, { eldritch }, SeaCreatures());

  function biteMe() { return 'OUCH'; }
  return Object.freeze(Lobster);
}
