// ? 8. Write a program to dispaly number from 1-20 using all types of loops

function differentTypesOfLoops() {
  for (let i = 1; i <= 20; i++) {
    console.log("first: ",i);
  }

  let i = 1;
  while (i <= 20) {
    console.log("second: ",i);
    i++;
  }

  let j = 1;
  do {
    console.log("third: ",j);
    j++;
  } while (j <= 20);

  for (const i in new Array(4).fill(1)) {
    console.log("fourth: ", i + 1);
  }

  for (const i of new Array(4).keys()) {
    console.log("fifth:" ,i + 1);
  }
}

differentTypesOfLoops();
