// ? Write a function expression that takes in another function as an argument

function parent(cb) {
  console.log("this is a parent function");
  cb();
}

function child() {
  console.log("this is a child function");
}

parent(child);
