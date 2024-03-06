// ? 5. Write a program to print all even number first and then all odd numbers using only one iteration

function allEvenOdd(n) {
    let even = "";
    let odd = "";
  
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) even += i + " ";
      else odd += i + " ";
    }
  
    console.log("Even: ", even.trimEnd().split(" "));
    console.log("Odd: ", odd.trimEnd().split(" "));
  }
  
  allEvenOdd(50);