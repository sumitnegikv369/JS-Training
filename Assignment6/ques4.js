// ? 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name. Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  static averageAge(persons) {
    return persons.reduce((acc, person) => person.age + acc.age) / 2;
  }
}

// Create instances
const person1 = new Person("sumit", "negi", 24);
const person2 = new Person("rohit", "rawat", 23);

console.log(person1.fullName());
console.log(person2.fullName());
console.log(Person.averageAge([person1, person2]));