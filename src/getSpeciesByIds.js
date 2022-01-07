const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Ref: https://github.com/tryber/sd-018-b-project-zoo-functions/pull/116
  // Percorre o array species, procurando(filtrando) objetos que contenham a chave ID igual ao IDS, retorna o objeto.
  return species.filter((animal) => ids.includes(animal.id));
}

module.exports = getSpeciesByIds;
