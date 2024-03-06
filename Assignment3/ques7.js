// ? 7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

function twiceOfNumber(n) {
    const result = [];
    for (let i = 2; i <= n; i = i + i) {
      result.push(i);
    }
    console.log(result);
  }
  
  twiceOfNumber(4096);