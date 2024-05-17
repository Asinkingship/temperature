function practice(){
    let num1=99;
    let num2=99;
    if(num1>num2){
        console.log("The num1 is greater than num2");
    }else if(num1<num2){
        console.log("The num1 is less than num2");
    }else{
        console.log("The values are the same");
    }   
}





// Challenge driving license
//1 prompt the user to enter thier age
//2 if the age is 18 or older proint congratulations you can get your licese
//3 if the age is less than 18 pront  sorry you aare too young to get a driving liscesne



function getDriveLicense(){
    var num1=prompt("How old are you?");
    let num2=16

    if(num1>num2){
        console.log("Congratulations! You can get your drivers license");
    }else if(num1<num2){
        console.log("Sorry you are to young");
    }else{
        console.log("Just barely");
    }
}


function guessNumber(){
    let randomNumber=Math.floor(Math.random()*10)+1;
    let userGuess=prompt("Guess the number between 1 and 10");

    if(userGuess==randomNumber){
        console.log("Congratulations!");  
    }else{
        console.log("Not correct!" + randomNumber);
    }
}

//Database simulation
let userName="kosborne@sdgku.edu";
let password="test123";

//create a login function

function login(){
    //get username and password from user
    let unameInput = prompt("enter your email:");
    let upassInput = prompt("enter your password:");

    if(unameInput===userName && upassInput===password){
        console.log("welcome to the system");
    }else{
        console.log("invalid credentials");
    }
}


