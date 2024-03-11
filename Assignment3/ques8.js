// ? 8. Write a program to dispaly number from 1-20 using all types of loops

function differentTypesOfLoops(n) {
  for (let i = 1; i <= n; i++) {
    console.log("first: ",i);
  }

  let i = 1;
  while (i <= n) {
    console.log("second: ",i);
    i++;
  }

  let j = 1;
  do {
    console.log("third: ",j);
    j++;
  } while (j <= n);

  for (const i in new Array(n).fill(1)) {
    console.log("fifth: ", parseInt(i) + 1);
  }

  for (const i of new Array(n).keys()) {
    console.log("sixth:" ,i + 1);
  }
}

differentTypesOfLoops(20);
