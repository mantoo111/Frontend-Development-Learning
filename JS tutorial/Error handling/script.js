let a = prompt("enter 1st number");

let b = prompt("enter 2nd number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b); //without using parseint it will consider it as string
function main(){
    let x= 1;2

try {
  console.log("the sum is", sum * x);
  return true
}
 catch (error) {
  console.log("error occur")
  return false
} 
finally {
  //concept of finally:it is basically use in functions
  // i write try catch and then finally:
  console.log("files are being closed and db connection is being closed");
}
}
let c =main()
