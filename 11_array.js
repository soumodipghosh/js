
const myArr = [1,2,3,4,5,6]
const myHeros = ["batman", "superman"]
const myArr2 = new Array (1,2,3,4,5,6)

console.log(myArr[1]);

//

myArr.push(7)
myArr.pop() // remove last value
myArr.unshift(9) // add at first
myArr.shift() // remove first array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // add and convert into a string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);


const marv = ["h","i","j","k"]
const dc = ["a","b","c","d"]
console.log(...marv, ...dc); //spread method

console.log(Array.isArray("raj"));
console.log(Array.from("raj"));
console.log(Array.from({name:"raj"}));













