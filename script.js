// first we will see the for each loop
// the first differnce is that this loop works on the arrays 
// so we first we have to create an array
let arr1=[1,2,3,45,6,7,8,"zain","usama"];
// syntax is first write the name of array

// the most imporatant thing is that foreach takes an function as a parameter
// it could be an arrow function or a normal function
arr1.forEach(function(item){
console.log("item by noraml function",item);
})
// arr1.forEach(item=>{
// console.log("item by arrow function",item);
// })


// now we will see if for each returns something or not
// for that we store it in a variable
let checkFirst=arr1.forEach(item=>{
    console.log("item by arrow function",item);
    });
    // so it does not return anything
    console.log(checkFirst);













