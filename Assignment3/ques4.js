// ? 4. Write a program to print all even number first and then all odd numbers
function allEvenOdd(n) {
  console.log("Even: ");
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }

  console.log("Odd: ");
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

allEvenOdd(50);
