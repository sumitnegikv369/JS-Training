// ? 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function camelCaseConverter(str) {
  let camelCased = "";
  let spaceIncountered = false;
  for (let i of str) {
    if (i === " ") {
      spaceIncountered = true;
      continue;
    }
    if (spaceIncountered) {
      spaceIncountered = false;
      camelCased += i.toUpperCase();
    } else {
      camelCased += i;
    }
  }
  return camelCased;
}

console.log(camelCaseConverter("hello john doe"));
