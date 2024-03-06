// ? 9. Write a program to find the last duplicate index in an array

function findLastIndexOfDuplicate(nums) {
  const freq = {};
  const result = [];

  for (let i in nums) {
    if (!freq[nums[i]]) {
      freq[nums[i]] = i;
    } else {
      freq[nums[i]] = freq[nums[i]] + " " + i;
    }

    if (freq[nums[i]].length > 1) {
      result.push(parseInt(freq[nums[i]][freq[nums[i]].length - 1]));
    }
  }

  return result.sort((a, b) => b - a)[0];
}

console.log(
  "Last duplicate index: ",
  findLastIndexOfDuplicate([1, 3, 4, 2, 5, 2, 8, 1])
);
