
function convertTemp(){
    let userTemp=prompt("Enter temperature")
    let userInput=prompt("Enter c for Celsius or f for Fahrenheit");
    
    

    if(userInput=="c"){
        let c=(userTemp - 32) * 5/9;              
        document.getElementById("tempConversion1").innerHTML= c + " - Celsius";
    
    }else if(userInput=="f"){
        let f=(userTemp * 9 / 5) + 32;                 
        document.getElementById("tempConversion1").innerHTML= f + " - Fahrenheit";
    
    }else{
        document.getElementById("tempConversion1").innerHTML= "Invalid Input";
    }
}




