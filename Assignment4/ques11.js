// ? 11. Write a program to sort an array (bubble sort)

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i, j);
      }
    }
  }
  return nums;
}

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

console.log(bubbleSort([1, 3, 4, 2, 5, 2, 8, 1]));
