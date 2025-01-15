
// stack ( primitive) Heap (non-primitive)

//stack
let myName = "raj"
let anotherName = "rajj"
anotherName = "soumodip"

console.log(myName);
console.log(anotherName);

//Heap
let userOne ={
    mail: "raj@gmail.com",
    upi: "raj@g"
}

let userTwo = userOne
userTwo.mail = "soumo@gmail.com"

console.log(userOne);
console.log(userTwo);



