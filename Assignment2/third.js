// ? Write a function expression that takes in another function as an argument

const parent = (cb) => {
    console.log("this is a parent function");
    cb();
}

const child = () => {
    console.log("this is a child function");
}

parent(child);