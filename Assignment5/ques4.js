// ? 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const person1 = {
    name: "sumit",
    age: 24,
    subjects: ["psychology","philosophy","computer science"],
    skills: {
        javascript: {
            react: "100%",
            node: "90%",
            nextjs: "80%"
        },
        css: {
            tailwind: "100%",
            bootstrap: "70%"
        }
    }
};

// const person2 = person1; // shallow copy

// person2.skills.css = "replaced"; 

// console.log(person1);
// console.log(person2);

const person2 = JSON.parse(JSON.stringify(person1));

person2.skills.css = "replaced"; 
person2.subjects = ["trading"]; 

console.log(person1);
console.log(person2);


