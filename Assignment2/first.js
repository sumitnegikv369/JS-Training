// ? Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

function randomNumber(){
    return Math.floor(Math.random()*10)+1;
}

function testFirst(n=10){
    for(let i=0; i<n; i++){
        console.log(randomNumber());
    }
}

testFirst(100);

