const array = ['cat', 'dog', 'elephant', 'fox'];
const getNthElement = (index, array) => {
  return array[index % array.length];
};


const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  console.log(array.push(element));
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(string => (string.match(/^[aeiou]/gi)));
}

const removeSpaces = string => {
  // your code here
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((total, current) => total + current, 0)
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort((x, y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
