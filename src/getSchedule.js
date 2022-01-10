const { species, hours } = require('../data/zoo_data');

const daysOfTheWeek = Object.keys(hours);

// console.log(getSchedule('snakes'));

// Monta agenda de quais animais estão disponíveis no dia selecionado
function getAnimalsByDay(weekday) {
  let animalsAvailible = [];

  species.forEach((el, i) => {
    if (el.availability.includes(weekday)) animalsAvailible.push(el.name);
  });
  if (weekday === 'Monday') animalsAvailible = 'The zoo will be closed!';
  return animalsAvailible;
}

// Colab com Marcos Rafael
function getByAnyString() {
  const objNoParam = {};

  daysOfTheWeek.forEach((day) => {
    objNoParam[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getAnimalsByDay(day),
    };
    if (day === 'Monday') objNoParam[day].officeHour = 'CLOSED';
  });
  return objNoParam;
}

// Função principal
function getSchedule(scheduleTarget) {
  // Entrada vazia ou inválida (nem dia, nem animal)
  if (scheduleTarget !== undefined) {
    // Encontrar somente a agenda do animal selecionado
    species.forEach((animal) => {
      if (animal.name.includes(scheduleTarget)) {
        console.log(`entrada animal: ${scheduleTarget}`);
      }
    });

    if (daysOfTheWeek.includes(scheduleTarget)) {
      return (`entrada dia da semana: ${scheduleTarget}`);
    }
  }
  return getByAnyString();
}

module.exports = getSchedule;
