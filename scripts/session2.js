


// function mult(num,num1){
//     // let num1=prompt("Enter a number:");
//     // let num2=prompt("Enter a number:");
//     console.log(num*num1);
// }

// mult(10,3);
// mult(8,2);
// mult(5,4);


function taxCalculation(){
    var product=prompt("Enter product name:");
    var price=prompt("Enter the price:");
    var qty=prompt("Enter the Quantity:");
    const taxes = 1.08;

    var subtotal=price*qty;
    var total=subtotal*taxes;

    console.log(product);
    console.log(subtotal);
    console.log(total);
}

//the user will input 2 numbers
//the function add up them
//display the result on the console
//r1 trigger the event using a button
//r2 create the flow diagram

function twoNumberadd(){
    var num1=prompt("Enter first number")
    var num2=prompt("Enter second number")

    var total=(num1 + num2);

    console.log(total);
}

// Enter student information (name, grade101, grade102) and calculate and display the GPA


function getGPA(){
//get the values
var name=prompt("Enter the name");
var grade101= Number (prompt("Enter the 101grade"));
var grade102= Number (prompt("Enter the 102grade"));

var gpa=(grade101+grade102)/2; // complete it


document.getElementById("studentList").innerHTML+=`
<li> Name: ${name} - GPA: ${gpa} </li>`;
}