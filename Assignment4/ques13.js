// ? 13. Write a program to return inverse of an array

// Use Cases: Cryptography, Data Rearrangement
// Definition: The inverse of an array is a new array constructed by exchanging the value at each index with the original index itself.

function inverseOfArray(arr){
  const inverseArr = [];
  for(let i in arr){
    inverseArr[arr[i]] = parseInt(i);
  }
  return inverseArr;
}

console.log(inverseOfArray([2, 3, 1, 0, 4])) // The inverse of the array [2, 3, 1, 0, 4] would be [3, 2, 0, 1, 4]