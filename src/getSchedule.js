const { species, hours } = require('../data/zoo_data');

const daysOfTheWeek = Object.keys(hours);
const animalsOfTheZoo = species.map((animal) => animal.name); // Nome de todas as espécies do Zoo

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
function fullSchedule() {
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
    if (animalsOfTheZoo.includes(scheduleTarget)) {
      const animalSchedules = species.reduce((objFinal, selAnimal) => {
        objFinal[selAnimal.name] = selAnimal.availability;
        return objFinal;
      }, {});
      return animalSchedules[scheduleTarget];
    }

    if (daysOfTheWeek.includes(scheduleTarget)) {
      return { [scheduleTarget]: fullSchedule()[scheduleTarget] };
    }
  }
  return fullSchedule();
}

module.exports = getSchedule;
