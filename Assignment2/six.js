// ? Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const evenOdd = (num) => {
    if(num%2===0) return "Even";
    return "Odd";
}

console.log(evenOdd(4));
console.log(evenOdd(5));