// 6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

var person = {
    name: "John Doe",
    age: 30,
    getDetails: function () {
        console.log(this.name + " is " + this.age + " years old");
    },
};
var getPersonDetails = person.getDetails;
getPersonDetails.call(person);

// ! Error Find: this keyword looses its reference when its method is assigned to another variable which is not in contain of its lexical object
// Use of call method to provide reference to the this keyword