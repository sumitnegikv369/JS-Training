// ? 12. Write a program to display intersection of two array

function intersection(arr1, arr2) {
  const result = [];

  if (arr1.length > arr2.length) {
    for (let i of arr1) {
      if (arr2.indexOf(i) !== -1) {
        result.push(i);
      }
    }
  } else {
    for (let i of arr2) {
      if (arr1.indexOf(i) !== -1) {
        result.push(i);
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 3, 4], [9, 8, 7, 2, 3]));
