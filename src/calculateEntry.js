const { prices } = require('../data/zoo_data');

// Separa as idades dos visitantes
function countAges(entrants) {
  const ages = [0, 0, 0];
  entrants.forEach((el) => {
    if (el.age < 18) {
      ages[0] += 1;
    } else if (el.age >= 18 && el.age < 50) {
      ages[1] += 1;
    } else {
      ages[2] += 1;
    }
  });
  return ages;
}

// Chama a função acima, e monta o objeto com as idades separadas
function countEntrants(entrants) {
  if (entrants !== undefined && entrants.length > 0) {
    const ages = countAges(entrants);
    return { child: ages[0],
      adult: ages[1],
      senior: ages[2],
    };
  }
  return 0;
}

// Desconstrói o objeto gerado por countEntrants para manusear melhor
// Multiplica os valores das entradas pelos valores pŕe-estabelecidos
// Retorna a soma de tudo
function calculateEntry(entrants) {
  if (entrants !== undefined && entrants.length > 0) {
    const { child, adult, senior } = countEntrants(entrants);
    const childPrices = child * prices.child;
    const adultPrices = adult * prices.adult;
    const seniorPrices = senior * prices.senior;
    return childPrices + adultPrices + seniorPrices;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
