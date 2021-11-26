const negate = (a) => {
  if (typeof a === 'boolean'){
    return !a;
  }
};

const both = (a, b) => {
  if (a === true && b === true){
    return true;
  }else if(a === true && b === false){
    return false;
  }else if (a === false && b === true){
    return false;
  }else{
    return false;
  }
};

const either = (a, b) => {
  if (a === true || b === true){
    return true;
  }else if (a === false || b === false){
    return false;
  }
};

const none = (a, b) => {
  if (a === true && b === true){
    return false;
  }else if(a === true && b === false){
    return false;
  }else if (a === false && b === true){
    return false;
  }else{
    return true;
  }
};

const one = (a, b) => {
  if (a === true && b === true){
    return false;
  }else if(a === true && b === false){
    return true;
  }else if (a === false && b === true){
    return true;
  }else{
    return false;
  }
};

const truthiness = (a) => {
  if(a){
    return true;
  }else{
    return false;
  }
};

const isEqual = (a, b) => {
  if (a === b){
    return true;
  }else{
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b){
    return true;
  }else{
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b){
    return true;
  }else{
    return false;
  }
};

const isOdd = (a) => {
  if (a % 2 === 1){
    return true;
  }else{
    return false;
  }
};

const isEven = (a) => {
  if (a % 2 === 0){
    return true;
  }else{
    return false;
  }
};

const isSquare = (a) => {
  if (a >=0 && Math.sqrt(a) % 1 === 0){
    return true;
  }else{
    return false;
  }
};

const startsWith = (char, string) => {
  if (string.startsWith(char) === true){
    return true;
  }else{
    return false;
  }
};

const containsVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  
  for (let i = 0; i < string.length; i++){
    if (vowels.includes(string[i])){
      return true;
    }
  }
  return false;
};

const isLowerCase = (string) => {
  if (string === string.toLowerCase()){
    return true;
  }else{
    return false;
  }
};

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
