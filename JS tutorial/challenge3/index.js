// let boxes= document.getElementsByClassName("box")
// console.log(boxes)
//another way
let boxes=document.querySelector(".container").children

function getRandomColor(){
    let val1=Math.ceil(0+ Math.random()*255);
    let val2=Math.ceil(0+ Math.random()*255);
    let val3=Math.ceil(0+ Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
  e.style.backgroundColor = getRandomColor()
  e.style.color = getRandomColor()
})
// Array.from(boxes): Converts the HTMLCollection (which is not directly iterable) into an array, so you can use array methods like forEach.
// .forEach(e => { ... }): Iterates over each element in the boxes array.