// 8. function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.getDetails = function() {
//    console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
var person = new Person("John Doe", 30);
person.getDetails();
delete person.name;

// ! Error: before calling person.getDetail method we are deleting the name property which making it unaccessible hence undefined