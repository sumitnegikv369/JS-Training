// ? 8. Write a program to dispaly number from 1-20 using all types of loops

function differentTypesOfLoops() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

  let i = 1;
  while (i <= 20) {
    console.log(i);
    i++;
  }

  let j = 1;
  do {
    console.log(j);
    j++;
  } while (j <= 20);

  for (const i in 20) {
    console.log(i);
  }

  for (const i in new Array(50).fill(1)) {
    console.log(i + 1);
  }

  for (const i of new Array(50).keys()) {
    console.log(i + 1);
  }
}

differentTypesOfLoops();
