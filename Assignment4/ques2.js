// ? 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function reverseString(str) {
  const result = [];
  let word = "";

  for (let i of str) {
    if (i === " ") {
      result.push(word);
      result.push(" ");
      word = "";
    }
    word = i + word;
  }

  // Remaining Word
  result.push(word);

  console.log(result.join(""));
}

reverseString("Hello John");
