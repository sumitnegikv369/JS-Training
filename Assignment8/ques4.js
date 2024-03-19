// 4.let myString = 'hello world';
// if (myString.length > 0) {
//     console.log('The length of the string is: ' + myString.length);
// } else {
//     console.log('The string is empty');
// }

// let myNumber = parseInt(myString);
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The value is not a number');
// }

let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = myString; // ! parsing of string to integer resulting in NAN
if (typeof myNumber === "number") {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}