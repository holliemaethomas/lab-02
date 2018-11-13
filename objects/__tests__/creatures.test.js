'use strict';

const Seacreatures = require('../Sea Creatures/creaures-class');

describe('Fish', () => {
  let fish = new Seacreatures.Fish();
  console.log(fish, 'FISH');
  it('can swim', () => {
    expect(fish.swims).toBeTruthy();
  });
});

describe('Lobster', () => {
  let lobster = new Seacreatures.Lobster();
  it('can swim', () => {
    expect(lobster.swims).toBeTruthy();
  });

  it('is an eldritch', () => {
    expect(lobster.eldritch()).toBe('Cthulu');
  });
});

// describe('Seacreatures', () => {

// });
