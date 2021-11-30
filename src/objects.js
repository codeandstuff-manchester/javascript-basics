const createPerson = (name, age) => {
  // your code here
  this.name = name;
  this.age = age;
  return this;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return object[property]? true : false;
};

const isOver65 = person => {
  // your code here
  return person.age > 65? true : false;
};

const getAges = people => {
  // your code here
  return people.map(ageArray => ageArray.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(carModel => carModel.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
  return people.reduce((a,b) => a + b.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    name: name,
    age: age,
    introduce: stranger => {
      return `Hi ${stranger}, my name is ${name} and I am ${age}!`;
    }
    };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
