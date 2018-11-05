const SeaCreatures = require('creatures-class.js');

const Wort = new SeaCreatures.Fish('Wort');
console.log(Wort.name, Wort.swims());

const horrorOfTheDeep = new SeaCreatures.Lobster('horrorOfTheDeep');
console.log(horrorOfTheDeep.name, horrorOfTheDeep.swims(), horrorOfTheDeep.eldritch());
