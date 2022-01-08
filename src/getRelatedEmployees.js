const { employees } = require('../data/zoo_data');

function isManager(id) {
  if (employees.find((pers) => pers.managers.includes(id))) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees
      .filter((pers) => `${pers.managers}` === `${managerId}`) // Utilizando template literals para igualar os tipos de variável (ESLint implicando)
      .map((pers) => `${pers.firstName} ${pers.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
