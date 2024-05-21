function convertTemperatureRange(){
    let start=prompt("start point");
    let end=prompt("end point");
    let userInput=prompt("Enter c for Celsius or f for Fahrenheit");

    for (let i=start;i<=end;i++){
        if(userInput==="c"){
            let c=(i - 32) * 5/9; 
            //document.getElementById("tempConversionResults").innerHTML= `<li> ${i} - Fahrenheit ==  ${c} - Celsius </li>`;   
            document.write(`<li> ${i} - Fahrenheit   =   ${c} - Celsius </li>`);
        }else if(userInput==="f"){
            let f=(i * 9/5) + 32;
            //document.getElementById("tempConversionResults").innerHTML= `<li> ${i} - Celcius ==  ${f} - Fahrenheit </li>`;    
            document.write(`<li> ${i} - Celsius   =   ${f} - Fahrenheit </li>`);
        }else{
            //document.getElementById("tempConversionResults").innerHTML= "Invalid Input";
            document.write("Invalid Input");
        }      
    }
}


//document.getElementById("tempConversionResults").innerHTML= `<li> ${i} - Fahrenheit ==  ${c} - Celsius </li>`;



//document.write(`<li> ${start} - Fahrenheit ${end} = ${c} </li>`);