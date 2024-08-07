function call(name) {
    
    console.log(  name +"is  good course")
    console.log( name +"is very imp for programmers")
    console.log( name +"helps in building your skills")
    console.log( name +"you are nice")
}
call("c++")
call("js")
//function to find sum of two numbers:
function sum(a,b,c=3){//here c is called to be default value i.e which is given already
    // console.log(a+b)
    return a+b+c
}
result1= sum(3,2)
result2= sum(13,12)
result3= sum(3,20,2)//->imp see
console.log("sum of a and b is",result1)
console.log("sum of a and b is",result2)
console.log("sum of a and b is",result3)

//arrow function
const func1=(x)=>{
    console.log("i am a arrow function",x)
}
func1(34)
func1(64)
func1(89)
