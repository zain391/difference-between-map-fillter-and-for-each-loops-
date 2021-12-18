// first we will see the for each loop
// the first differnce is that this loop works on the arrays 
// so we first we have to create an array
let arr1 = [1, 2, 3, 45, 6, 7, 8, "zain", "usama"];
// syntax is first write the name of array

// the most imporatant thing is that foreach takes an function as a parameter
// it could be an arrow function or a normal function
arr1.forEach(function (item) {
    console.log("item by noraml function", item);
})
// arr1.forEach(item=>{
// console.log("item by arrow function",item);
// })


// now we will see if for each returns something or not
// for that we store it in a variable
let checkFirst = arr1.forEach(item => {
    console.log("item by arrow function", item);
});
// so it does not return anything
console.log(checkFirst);

// now we will see the working of the map and fillter loops
// the syntax of foreach map and filtter is same
// they all works on arrays 
// but they have some differences that we will see in a moment
console.clear();
let returingMap = arr1.map(item => {
    console.log("i am a map loop", item);
    return item;
    // the map rerturns a new array with the lenght same as of the origional arrray
});
console.log(returingMap);

let returningFillter=arr1.filter(item => {
    // the map rerturns a new array with the lenght same as of the origional arrray or less than the origional array
    console.log("i am a filter loop", item);
    return item;
})
console.log(returningFillter);












