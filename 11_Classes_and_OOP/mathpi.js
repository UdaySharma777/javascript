// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// const mynewObject = Object.create(null)

const Chai = {
    name:"ginger",
    price:"250",
    isAvailable:true,

    orderChai: function(){
        console.log("chai nhi bni");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

Object.defineProperty(Chai,"name",{
//     writable: false,
     enumerable: false
 })
console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

for(let [key,value] of Object.entries(Chai)) {
    if (typeof value !=='function'){
    console.log(`${key} : ${value}`);}

}









