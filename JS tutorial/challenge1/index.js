console.log("Faulty calculaor")
let random=Math.random()
let a = prompt("Please enter first number");
console.log(a);

let b = prompt("Please enter second number");
console.log(b);
let op =prompt("Please enter the operator");
console.log(op);

if(random>0.1){
    //perform correct calculation
    if (op== "+") {
        console.log(a+b)
        
    }
    else if (op== "-") {
        console.log(a-b)
        
    }
    else if (op== "*") {
        console.log(a*b)
        
    }
    else if (op== "/") {
        console.log(a/b)
        
    }
    else{
        console.log("invalid operator")
    }
    
}
else{
    console.log("not greater than 0.1")


if (op== "+") {
    console.log(a-b)
    
}
else if (op== "-") {
    console.log(a/b)
    
}
else if (op== "*") {
    console.log(a+b)
    
}
else if (op== "/") {
    console.log(a**b)
    
}
else{
    console.log("invalid operator")
}

}
