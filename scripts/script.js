console.log("script")

// var userName; // declaration of var
// userName = prompt("Enter your name"); //assign value
// console.log(userName);

// userName=15;

//user enter a number
var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
//present a menu - options 1-4
var option = prompt("Select 1) multiply or select 2) divide or select 3) subtract or select 4) add");
var results;
//do the calculation
if(option==1){
    results=num1 * num2;
    console.log(num1 + " x " + num2);
}
if(option==2){
    results=num1 / num2;
    console.log(num1 + " / " + num2);
}
if(option==3){
    results=num1 - num2;
    console.log(num1 + " - " + num2);
}
if(option==4){
    results=num1 + num2 ;
    console.log(num1 + " + " + num2);
}

//present the results on the console
console.log("The result is: " + results);







// //user enter a number
// var num=Number(prompt("Enter a number"));
// //present a menu x3 - x5
// var option = prompt("Select 1) num x 3 or select 2) num x 5");
// var results;
// //do the calculation
// if(option==1){
//     results=num*3;
//     console.log(num + " x 3 ");
// }
// if(option==2){
//     results=num*5;
//     console.log(num + " x 5 ");
// }

// //present the results on the console
// console.log("The result is: " + results);