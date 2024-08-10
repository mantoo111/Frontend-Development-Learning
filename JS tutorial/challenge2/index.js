console.log("printing the factorial of number")

    

let arr2 =[6,5,4,3,2,1]
const reduce=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(reduce))

console.log("Printing the factorial of a number using loop");

let number = 6; // Change this value to find the factorial of a different number
let factorial = 1; // Start with 1 because factorial is a product

for (let i = 1; i <= number; i++) {
    factorial *= i; // Multiply the current value of factorial by i
}

console.log(factorial);