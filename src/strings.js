const sayHello = (string) => `Hello, ${string}!`;

const uppercase = (upperWord) => upperWord.toUpperCase();

const lowercase = (lowerWord) => lowerWord.toLowerCase();

const countCharacters = (countWord) => countWord.length;

const firstCharacter = (firstAlp) => firstAlp[0];

const firstCharacters = (string, n) => string.slice(0, n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
