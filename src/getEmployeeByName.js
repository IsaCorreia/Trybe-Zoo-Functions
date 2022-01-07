const { employees } = require('../data/zoo_data');

function getEmployeeByName(empName) {
  if (empName !== undefined) {
    return employees.find((pers) => pers.firstName === empName || pers.lastName === empName);
  }
  return {}; // Ideal: Default Parameter. Não consegui aplicar.
}

module.exports = getEmployeeByName;
