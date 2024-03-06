// ? 7. Write a program to find index of duplicate elements in an array

function findIndexOfDuplicate(nums) {
  const freq = {};
  const result = [];

  for (let i in nums) {
    if (!freq[nums[i]]) {
      freq[nums[i]] = i;
    } else {
      freq[nums[i]] = freq[nums[i]] + " " + i;
    }

    if (freq[nums[i]].length > 1) {
      result.push(`element:${nums[i]} => indices (${freq[nums[i]]})`);
    }
  }

  return result;
}

console.log(findIndexOfDuplicate([1, 3, 4, 2, 5, 2, 8, 1]));
