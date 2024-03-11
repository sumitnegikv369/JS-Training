// ? 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

function diamondPattern(n) {
  let row = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    console.log(row);
    row = "";
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    console.log(row);
    row = "";
  }
}

diamondPattern(5);
