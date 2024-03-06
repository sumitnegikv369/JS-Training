// ? 6. Write a program to find sum of an array

const nums = [];

for (let i = 0; i < 10; i++) {
  // filling array with some random values
  nums.push(Math.floor(Math.random() * 10) + 1);
}

console.log(nums);

function sumOfArray(nums) {
  return nums.reduce((num, acc) => num + acc);
}

console.log("Total: ",sumOfArray(nums));
