const { species } = require('../data/zoo_data');

// arg vazio, retorno esperado:
// {'lions': 4, 'tigers': 2, 'bears': 3, 'penguins': 4, 'otters': 4, 'frogs': 2, 'snakes': 2, 'elemephants': 4, 'giraffes': 6}

// Conta todos os animais de antemão
const totalAnimals = () => species.reduce((accumulator, elem) => {
  accumulator[elem.name] = elem.residents.length;
  return accumulator;
}, {});

function countAnimals(animal) {
  // Caso a função seja chamada com argumento vazio, retorna e já fecha a função
  if (animal === undefined) {
    const animals = totalAnimals();
    return animals;
  }

  // Desconstrói o objeto do argumento, para manusear melhor
  const { specie, sex } = animal;
  if (specie !== undefined && sex !== undefined) {
    // Recebendo os dois argumentos, specie e sex, retorna exclusivamente a quantidade de indivíduos daquela espécie e sexo
    return species
      .find((elem) => elem.name === specie).residents
      .filter((elem) => elem.sex === sex).length;
  }
  // caso receba somente a espécie, retorna qtd total de animais daquela especie
  return species.find((elem) => elem.name === specie).residents.length;
}

module.exports = countAnimals;
