'use strict';

const Seacreatures = require('../creatures-class.js');

describe('Seacreatures', () => {

  describe('Fish', () => {

    let fish = new Seacreatures.Fish();

    it('can swim', () => {
      expect(fish.swims()).toBeTruthy();
    });
    });
  };

  describe('Lobster', () => {

    let lobster = new Seacreatures.Lobster();

    it('can swim', () => {
      expect(lobster.swims()).toBeTruthy();
    });

    it('is an eldritch', () => {
      expect(lobster.eldritch()).toBeTruthy();
    });

  });

