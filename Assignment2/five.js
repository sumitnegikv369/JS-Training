// ? Write a function expression that takes in two numbers and returns their sum.

function sum(...rest) {
  return rest.reduce((num, acum) => num + acum, 0);
}

console.log(sum(2, 3, 9));
