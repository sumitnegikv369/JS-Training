// ? 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

function calculator(operation, ...operands){
  let result;
  switch (operation) {
    case "add":
      result = operands.reduce((num, acc) => num + acc, 0);
      break;
      case "sub":
      result = operands.reduce((num, acc) => num - acc);
      break;
      case "multiply":
        result = operands.reduce((num, acc) => num * acc, 1);
        break;
        case "divide":
          result = operands.reduce((num, acc) => num / acc);
          break;
    default:
      return "unknown operation!"
  }

  return result;
}

console.log(calculator("add", 2,3,4));
console.log(calculator("sub", 2,3,4));
console.log(calculator("multiply", 2,3,4));
console.log(calculator("divide", 2,3,4));
console.log(calculator("", 2,3,4));