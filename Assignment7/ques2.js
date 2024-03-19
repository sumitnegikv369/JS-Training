// ? 2. Give an example of using multiple callback functions in a single function in JavaScript

function removeSpecialCharacter(str) {
    let alphabets = "";
    for (let i of str) {
        const asii = i.charCodeAt(0);
        if ((asii >= 65 && asii <= 90) || (asii >= 97 && asii <= 122)) {
            alphabets += i;
        }
    }

    return alphabets;
}

function breakWords(str) {
    let newForm = "";
    let counter = 0;
    for (let i of str) {
        if (counter == 3) {
            counter = 0;
            newForm += i + "-";
        } else {
            newForm += i;
            counter += 1;
        }
    }
    return newForm;
}

function convertData(data, cb1, cb2) {
    console.log("data: ", data);
    const temp = cb1(data);
    const result = cb2(temp);
    return `result: ` + result;
}

console.log(
    convertData("userinfo@123#TR", removeSpecialCharacter, breakWords)
);
