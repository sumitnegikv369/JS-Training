// ? 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function countAlphabets(str) {
  const frequency = {};
  let result = "";

  for (let i of str) {
    frequency[i] = frequency[i] + 1 || 1;
  }

  for (let i of Object.entries(frequency)) {
    result += i[0] + i[1];
  }

  return result;
}

console.log(countAlphabets("abcabcdabbcc"));
