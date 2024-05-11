console.log("script")

// var userName; // declaration of var
// userName = prompt("Enter your name"); //assign value
// console.log(userName);

// userName=15;

//user enter a number
var num=Number(prompt("Enter a number"));
//present a menu x3 - x5
var option = prompt("Select 1) num x 3 or select 2) num x 5");
var results;
//do the calculation
if(option==1){
    results=num*3;
    console.log(num + " x 3 ");
}
if(option==2){
    results=num*5;
    console.log(num + " x 5 ");
}

//present the results on the console
console.log("The result is: " + results);