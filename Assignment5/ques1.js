// ? 1. Write a program to iterate over object.

const iterateOverObject = () => {
  let obj = {
    username: "sumit negi",
    age: 24,
    tech: ["NextJS", "ReactJS"],
  };

  for (let [key, value] of Object.entries(obj)) {
    console.log(key, ": ", value);
  }
};

iterateOverObject();
