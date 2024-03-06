// ? 14. Write a program to reverse an array

function reverseArray(nums) {
  const result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    result.push(nums[i]);
  }

  console.log(result);
}

reverseArray([1, 2, 3, 4, 5, 6]);
