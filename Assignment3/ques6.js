// ? 6. Write a program to display prime numbers from 1 to 50

function printPrime() {
  let primes = [];
  for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(i);
      }
    }
  
    console.log(primes);
  }
  
  printPrime();