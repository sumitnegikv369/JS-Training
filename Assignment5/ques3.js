// ? 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const users = [
    {
      name: "sumit negi",
      age: 24,
      id: 1
    },
    {
      name: "saloni",
      age: 22,
      id: 2
    },
    {
      name: "kavi",
      age: 18,
      id: 3
    },
    {
      name: "rohit",
      age: 23,
      id: 4
    },
  ];

  const removeId = (users) => users.map((user)=> {
    delete user.id;
    return user;
  });
  
  console.log(removeId(users));
