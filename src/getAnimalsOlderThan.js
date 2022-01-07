const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Procura em SPECIES, a especie pelo nome dado, entra na chave RESIDENTS
  const animalsBySpeciesName = species.find((especie) => especie.name === animal).residents;
  // Procura na chave RESIDENTS se TODOS os membros tem idade maior ou igual ao número dado
  return animalsBySpeciesName.every((resident) => resident.age >= age);
}

console.log(`Todos os animais são mais velhos que X?: ${getAnimalsOlderThan('otters', 10)}`);;
module.exports = getAnimalsOlderThan;
