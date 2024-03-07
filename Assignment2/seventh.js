// ? 3 Write a function expression that takes in another function as an argument

const parent = (cb) => {
  console.log("this is a parent function");
  cb();
};

const child = () => {
  console.log("this is a child function");
};

parent(child);

// ? 4 Write a function expression that takes in a number and returns its square

const numberPower = (num, pow = 2) => {
  return Math.pow(num, pow);
};

console.log(numberPower(4));

// ? 5 Write a function expression that takes in two numbers and returns their sum.

const sum = (...rest) => {
  return rest.reduce((num, acum) => num + acum, 0);
};

console.log(sum(2, 3, 9));

// ? 6 Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const evenOdd = (num) => num % 2 === 0;
console.log(evenOdd(4));
console.log(evenOdd(5));
