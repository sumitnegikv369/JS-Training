// ? 2. Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function fig1(n) {
  let counter = 1;
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      row += counter++;
    }
    console.log(row);
    row = "";
  }
}

fig1(4);
console.log("\n");

function fig2(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      row += i + 1;
    }
    console.log(row);
    row = "";
  }
}

fig2(4);
console.log("\n");

function fig3(rows) {
  for (let i = 0; i < 2 * rows; i++) {
    let counter = 1;
    let row = "";
    if (i < rows) {
      for (let j = rows - i - 1; j >= 0; j--) {
        row += counter++;
      }
      console.log(row);
    } else if (i > rows) {
      for (let j = 0; j <= i - rows; j++) {
        row += counter++;
      }
      console.log(row);
    }
  }
}

fig3(5);
