
// object literals 

const mySym = Symbol("key1")
const jsUser = {
    name : "raj",
    age : 22,
    "group" : "A-",
    [mySym] : "key1" // now its define as a symbol
}
console.log(jsUser.name); // not a good way
console.log(jsUser["age"]); // right way
//console.log(jsUser."group");
console.log(typeof mySym)
console.log(jsUser[mySym]);

jsUser.email = "raj@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "soumo@gmail.com"
console.log(jsUser);


jsUser.greeting = function (){
    console.log("hello");
}
jsUser.greeting2 = function (){
    console.log(`hello ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


// part 2 singleton //

const tinderUser = {}

tinderUser.name = "raj",
tinderUser.id = "12345",
tinderUser.age = "22"
console.log(tinderUser);


const Name = {
    email : "abc@gmail.com",
    fullName: {
        userfullname:{
            firstname:"raj",
            lastname:"ghosh"
        }
    }
}
console.log(Name.fullName.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);
console.log(typeof obj4);


const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);
console.log(typeof obj5);


const users = [
    {
        id:1,
        email:"raj@gmail.com"
    },
    {
        id:1,
        email:"raj@gmaill.com"
    },
    {
        id:3,
        email:"raj@gmailll.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



// object de-structure and json api

const course = {
    id: "raj",
    email: "raj@gmail.com",
    pass: 123456
}

const {email:mail} = course
console.log(mail);


// api

// {
//     "name":"raj",
//     "age":"22"
// }

// [
//     {}
//     {}
//     {}
// ]







