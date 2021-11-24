const sayHello = (word) => {
  if (typeof word === 'string'){
    return 'Hello, ' + word + '!';
  }
};

const uppercase = (upperWord) => {
  if (typeof upperWord === 'string'){
    return upperWord.toUpperCase();
  }
};

const lowercase = (lowerWord) => {
  if (typeof lowerWord === 'string'){
    return lowerWord.toLowerCase();
  }
};

const countCharacters = (countWord) => {
  if (typeof countWord === 'string'){
    return countWord.length;
  }
};

const firstCharacter = (firstAlp) => {
  if (typeof firstAlp === 'string'){
    return firstAlp[0];
  }
};

const firstCharacters = (string, n) => {
  if (typeof string === 'string'){
    return string.slice(0, n);
  }
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
