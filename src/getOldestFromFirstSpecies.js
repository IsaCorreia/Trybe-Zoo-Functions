const { species, employees } = require('../data/zoo_data');

/*
  Input: ID do funcionário
    Em employees:
    1) Encontrar objeto do funcionário
    2) Localizar espécies que o funcionário trata
    3) Localizar ID da primeira espécie

    Em species:
    4) Localizar ID da espécie
    5) Localizar animal mais velho da espécie
    6) Criar objeto com as informações solicitadas (name, sex, age)

  Output: [ name: 'nomeDoAnimal', sex: 'F/M', age: '00' ]
*/

function firstSpeciesByEmployee(employeeId) {
  return employees
    .find((element) => element.id === employeeId)
    .responsibleFor[0];
}

function oldestFromSpecies(animalId) {
  return species
    .find((element) => element.id === animalId)
    .residents
    .sort((animalA, animalB) => animalB.age - animalA.age)[0];
}

function getOldestFromFirstSpecies(id) {
  const oldestAnimal = oldestFromSpecies(firstSpeciesByEmployee(id));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
