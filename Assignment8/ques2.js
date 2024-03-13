// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

let myObject = { name: 'John', age: 30 };
for (let property in myObject) {
   console.log(property + ': ' + myObject[property]);
}

// ! Error: variable scope declaration missing in property, the keys are in string format when 'in' is used so we have to used square bracket syntax when accessing the values from the keys in object