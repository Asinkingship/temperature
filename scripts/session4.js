// for(let i=10; i<=100;i+=10){
//     console.log(i);
// }




function multiplicationTable(){
    let x=prompt("Enter a number");
    let start=prompt("start point");
    let end=prompt("end point");

    document.write(`<h2> Multiplication table for ${x} </h2>`);
    for (let i=start;i<=end;i++){
        document.write(`<li> ${i} x ${x} = ${i*x} </li>`);
    }
}


function multiplicationTableAlt(){  
    let x="wroing var"; 
    document.write(`<h2> Multiplication table for ${x} </h2>`);
    for (let i=1;i<=50;i++){
        document.write(`<li> ${i} x ${x} = ${i*x} </li>`);
        if (i%3==0 && i%5==0){
            document.write(`<li> ${i} x ${x} = "FizzBuzz" </li>`);
        }else if(i%5==0){
            document.write(`<li> ${i} x ${x} = "Buzz" </li>`);
        }else if(i%3==0){
            document.write(`<li> ${i} x ${x} = "Fizz" </li>`);
        }
    }
}
