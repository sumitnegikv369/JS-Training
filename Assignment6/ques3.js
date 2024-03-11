// ? 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// ? 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// ? 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  
    farewell() {
      return `See you later, ${this.firstName}!`;
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, studies) {
      super(firstName, lastName);
      this.studies = studies;
    }
  
    greeting() {
      return (
        `Hi! I'm ${this.firstName} ${this.lastName} and I'm studying ${this.studies}.`
      );
    }
  }
  
  class Teacher extends Person {
    constructor(firstName, lastName, subjectsTaught) {
      super(firstName, lastName);
      this.subjectsTaught = subjectsTaught;
    }
  
    farewell() {
      return (
        `Goodbye, ${this.firstName} Sir, I Have a great time learning ${this.subjectsTaught}.`
      );
    }
  }
  
  // Create instances
  const student1 = new Student("Sumit", "Negi", "Computer Science");
  const teacher1 = new Teacher("Uday", "Bisht", "Arts");
  
  console.log(student1.greeting());
  console.log(teacher1.farewell());