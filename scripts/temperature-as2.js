


function celsiusToFah(){
    var celsius=prompt("Enter Temp in Celsius");
    var fahrenheit=(celsius * 9 / 5) + 32;

    document.getElementById("celsiusInput").innerHTML+=`
    <li> Celsius: ${celsius} - Fahrenheit: ${fahrenheit} </li>`;
}