// ? Write a function to take input(age, name, phone no.) from user and display it

function validateInfo(age, username, phoneNumber){
    // TODO: validation check will come here
    return true;
}

function getUserInfo(){
    const age = prompt("enter your age");
    const username = prompt("enter your name");
    const phoneNumber = prompt("enter your phone no.");
    if(validateInfo(age, username, phoneNumber)){
        document.getElementsByClassName("info")[0].innerHTML = `
        <li>Age: ${age}</li>
        <li>User Name: ${username}</li>
        <li>Phone Number:${phoneNumber}</li>
        `;
    }
}

getUserInfo();