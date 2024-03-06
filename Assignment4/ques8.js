// ? 8. Write a program to remove dupliacte elements from an array

function removeDuplicate(nums) {
  const resultArray = [];

  for (let i of nums) {
    if (resultArray.indexOf(i) === -1) {
      resultArray.push(i);
    }
  }

  return resultArray;
}

console.log(removeDuplicate([1, 3, 4, 2, 5, 2, 8, 1]));
