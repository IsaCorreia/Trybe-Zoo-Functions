const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Ref: https://github.com/tryber/sd-018-b-project-zoo-functions/pull/116
  // Percorre o array species, procurando(filtrando) objetos que contenham a chave ID igual ao IDS, retorna o objeto.
  return species.filter((animal) => ids.includes(animal.id));
}
console.log(`getSpeciesByIds: ${JSON.stringify(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'))}`);
module.exports = getSpeciesByIds;
