
// primitive (stack memory)
// 7 types : string, number, boolean, null, undefined, symbol, bigint
// const bigNum = 1234567890n //bigint
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);


// Reference (non primitive [Heap memory])

// array, objet, functions [ learn object and browser events to master js ]
// const heros = [spidy, rdj, batman] //array
// let obj ={
//    name: raj,
//    age: 22
// }
const myFunction = function(){
    console.log("hii");
}
myFunction();



// primitive : const score = 100
// const scoreValue = 100.3


// https://262.ecma-international.org/5.1/#sec-11.4.3