
function convertTemp(){
    let userTemp=prompt("Enter temperature")
    let userInput=prompt("Enter c for Celsius or f for Fahrenheit");
    let c=(userTemp - 32) * 5/9;
    let f=(userTemp * 9 / 5) + 32;

    if(userInput==c){
        document.getElementById("tempConversion1").innerHTML= c + " - Celsius";
    }else if(userInput==f){
        document.getElementById("tempConversion2").innerHTML= f + " - Fahrenheit";
    }else{
        document.getElementById("tempConversion3").innerHTML= "Invalid Input";
    }
}




