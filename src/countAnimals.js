const { species } = require('../data/zoo_data');

const arg1 = { specie: 'penguins' };
const arg2 = { specie: 'giraffes', sex: 'female' };

function countAnimals(...animal) {
  console.log(species.contains(animal).residents)
}

console.log(`Teste 1: ${countAnimals(arg1)}`);
// console.log(`Teste 2, 'lions' 'otters': ${countAnimals('lions', 'otters')}`);
module.exports = countAnimals;
