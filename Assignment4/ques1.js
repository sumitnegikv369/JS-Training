// ? 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function removeDuplicates(str) {
  let result = "";

  for (let i of str) {
    if (result.indexOf(i) < 0) {
      result += i;
    }
  }
  console.log(result);
}

removeDuplicates("Hello Yellow");
