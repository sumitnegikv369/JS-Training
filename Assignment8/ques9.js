// 9.function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

function Person(name, age) { this.name = name; this.age = age; }
var person = new Person("John Doe", 30);
console.log(person.name);

// ! Error: Person need to be called with the new keyword before the arguments (name and age) to create a new object instance. Calling it without new treats it like a regular function call, not a constructor.