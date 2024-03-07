// ? 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const users = [
  {
    name: "sumit negi",
    age: 24,
  },
  {
    name: "saloni",
    age: 22,
  },
  {
    name: "kavi",
    age: 18,
  },
  {
    name: "rohit",
    age: 23,
  },
];

const sortingObject = (users) => {
return users.sort((a, b) => a.age-b.age);
};

console.log(sortingObject(users));
