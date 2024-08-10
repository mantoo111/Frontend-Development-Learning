//program that will make  new arr that contain sq of that numbers: 
let arr =[1,13,5,7,11];
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
//for the above convenient method is:
let newarr =arr.map((e,index,arr)=>{
    return e**2
})
console.log(newarr)

const greaterthanseven =(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanseven))
//Reduce:it will reduce the array into single value
let arr2 =[1,2,3,4,5,6]
const reduce=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(reduce))
let array="ANSA"
console.log(Array.from("ANSA"))