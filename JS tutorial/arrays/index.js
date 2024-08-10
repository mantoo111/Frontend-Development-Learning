let arr =[1 , 2,4,5,7]
console.log(arr);
console.log(arr.length)
arr[0]=455;
console.log(arr[0])
console.log(arr, typeof arr)
console.log(arr.toString())
console.log(arr.join("and"))
console.log(arr.pop())//will pop from the last
console.log(arr.push("ansa"))//will push in the last of arr
console.log(arr.unshift("jack"))//brother of push
console.log(arr.shift())//brother of pop
console.log(delete arr[3])
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))
//concept of splice to take out the elements
let a=[1,2,3,
4,5,6,7,8,9]
console.log(a.splice(1,2))//this index value will be taken out
//cocept of slice to add elements
let b=[1,2,3,
    4,5,6,7,8,9]

    console.log(b.splice(1,3,444,678))
    console.log(b)

    let c=[32,56,43,67,89,90]
    for (let index = 0; index < c.length; index++) {
        const element = c[index];
        console.log(element)
        
    }
    //foreach:used to show the value with index
    // a.forEach((value,index,arr1)=>{
    //     console.log(value,index,arr1)
    // })

    let obj={
        a:1,
        b:2,
        c:3
    }
    // for (const key in obj) {
    //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
    //         const element = obj[key];
    //         console.log(key,element)
            
    //     }
    // }


for (const iterator of a) {
    console.log(iterator)//element
    
}