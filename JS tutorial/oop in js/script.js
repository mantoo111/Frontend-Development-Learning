class Animal{
    constructor(name){
        this.name=name
        console.log("obj is created")
    }
    eats(){
        console.log("eating")
    }
    runs(){
        console.log("running")
    }
}

class lion extends Animal{
    constructor(name){
    super(name)
    console.log("boj is created for lion")

    }
}
let a = new Animal("bunny");
console.log(a)
let l= new lion("lion")