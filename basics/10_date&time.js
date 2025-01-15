
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let myNewDate = new Date("07-01-2025")
console.log(myNewDate.toLocaleString());


// Time

let myNewTime = Date.now()
console.log(myNewTime);
console.log(myNewDate.getTime());
console.log(myNewDate.getDay());

myNewTime.toLocaleString("default",{
    weekday : "long"
})









