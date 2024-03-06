// ? 13. Write a program to return inverse of an array

function inverseOfArray(nums) {
  for (let i = 0; i < nums.length / 2; i++) {
    [nums[i], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[i]];
  }

  return nums;
}

console.log(inverseOfArray([1, 2, 3, 4, 5, 6]));
