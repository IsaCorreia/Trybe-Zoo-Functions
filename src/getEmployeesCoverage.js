const { species, employees } = require('../data/zoo_data');
/*
  Input: ()
  Output: 1 Array de objetos contendo:
   [ 
     {
     ¹ id,
     ¹ nome completo,
     ² especies que funcionario cuida,
     ³ locais onde as especies se encontram.
    },
   ]
  
  Dicas?
  ¹ "getEmployee"
  ² "getOldestFromSpecies"
  ³ "getAnimalMap"
*/

function getEmployeeInfo (employee) {
  // Para entrada: id, nome, sobrenome
  return employees.find((elem) => elem.id == employee);
}

function getEmployeesCoverage(info) {
  // Deve checar qual o tipo de entrada (se: nome, id, sobrenome, vazio ou inválido)
  return getEmployeeInfo(info)
}
const testEmployee = employees[0];
console.log(`
  ==============
  Input teste:
  ${testEmployee.id}
  ${testEmployee.firstName}
  ${testEmployee.lastName}
  ==============

  Output:
  `);
console.log(getEmployeesCoverage(testEmployee.id));

module.exports = getEmployeesCoverage;
