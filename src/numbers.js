const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
};

const subtract = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a - b;
  }
};

const multiply = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a * b;
  }
};
const divide = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a / b;
  }
}

const power = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a ** b;
  }
}

const round = (a) => {
  if (typeof a === 'number'){
    return Math.round(a);
  }
}

const roundUp = (a) => {
  if (typeof a === 'number'){
    return Math.ceil(a);
  }
}

const roundDown = (a) => {
  if (typeof a === 'number'){
    return Math.floor(a);
  }
}

const absolute = (a) => {
  if (typeof a === 'number'){
    return Math.abs(a);
  }
}

const quotient = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number' && a >= 0){
    return Math.floor(a / b);
  }else if (typeof a === 'number' && typeof b === 'number' && a < 0){
    return Math.ceil(a / b);
  }
}

const remainder = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a % b;
  }
}

module.exports = {
add,
subtract,
multiply,
divide,
power,
round,
roundUp,
roundDown,
absolute,
quotient,
remainder 
}