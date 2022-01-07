const {species} = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const selectedId = species.map((animal) => animal.id).find(id => id == ids);
  return selectedId;\
}

console.log(`final: ${getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')}`);

module.exports = getSpeciesByIds;
// Requisito 1!