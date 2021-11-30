const negate = (a) => !a;

const both = (a, b) => {
  if (!a || !b) {
    return false;
  }
  return true;
}

const either = (a, b) => {
  if (a || b) {
    return true;
  }
  return false;
}
const none = (a, b) => {
  if (a || b) {
    return false;
  }
  return true;
}

const one = (a, b) => {
  if ((a && !b) || (b && !a)) {
    return true;
  }
  return false;
}

const truthiness = (a) => {
  if(a){
    return true;
  }
    return false;
  }

const isEqual = (a, b) => {
  if (a === b){
    return true;
  }
    return false;
  }


const isGreaterThan = (a, b) => {
  if (a > b){
    return true;
  }
    return false;
  }

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b){
    return true;
  }
    return false;
  }

const isOdd = (a) => {
  if (a % 2 === 1){
    return true;
  }
    return false;
  }

const isEven = (a) => {
  if (a % 2 === 0){
    return true;
  }
    return false;
  }

const isSquare = (a) => {
  if (Math.sqrt(a) % 1 === 0){
    return true;
  }
    return false;
  }

const startsWith = (char, string) => {
  if (string.startsWith(char) === true){
    return true;
  }
    return false;
  }


const containsVowels = (string) => /[aeiou]/gi.test(string);

const isLowerCase = (string) => {
  if (string === string.toLowerCase()){
    return true;
  }
    return false;
  }

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
