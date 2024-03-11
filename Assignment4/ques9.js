// ? 9. Write a program to find the last duplicate index in an array

function findLastIndexOfDuplicate(nums) {
  const freq = {};

  for (let i in nums) {
    if (freq[nums[i]]) {
      freq[nums[i]] = [...freq[nums[i]], i];
    } else {
      freq[nums[i]] = [i];
    }
  }

  for (let i of Object.entries(freq)) {
    if (i[1].length > 1) {
      console.log(`Last duplicate index of ${i[0]}: ${i[1].at(-1)}`)
    }
  }
}

findLastIndexOfDuplicate([1, 3, 4, 2, 5, 2, 8, 1])

findLastIndexOfDuplicate([1, 3, 4, 2, 5, 2, 8, 1, 7, 9, 1, 11, 9])
