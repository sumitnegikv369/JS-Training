// ? 12. Write a program to display intersection of two array

function intersection(arr1, arr2) {
  const result = [];
  let arrToCompare, arrToIterate;

  if (arr1.length > arr2.length) {
    arrToIterate = arr1;
    arrToCompare = arr2;
  }else{
    arrToIterate = arr2;
    arrToCompare = arr1;
  }

    for (let i of arrToIterate) {
      if (arrToCompare.indexOf(i) !== -1) {
        result.push(i);
      }
    }
  return result;
}

console.log(intersection([1, 2, 3, 4], [9, 8, 7, 2, 3]));
