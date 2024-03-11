// ? 4. Write a program to convert given string to upperCase OR lowerCase

function caseConverter(str) {
  let numberOfLowerCase = 0;
  let numberOfUpperCase = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96) {
      // lowercase
      numberOfLowerCase++;
    } else if (str.charCodeAt(i) < 97) {
      // uppercase
      numberOfUpperCase++;
    }
  }

  if (numberOfLowerCase > 0 && numberOfUpperCase > 0) {
    // means there are both upper and lower case alphabet available
    console.log("UpperCase: ", str.toUpperCase());
    console.log("LowerCase: ", str.toLowerCase());
  } else if (numberOfLowerCase > 0) {
    console.log("LowerCase to UpperCase: ", str.toUpperCase());
  } else {
    console.log("UpperCase to LowerCase: ", str.toLowerCase());
  }
}

caseConverter("successive");
caseConverter("SUCCESSIVE");
caseConverter("SUCcEssIVE");
