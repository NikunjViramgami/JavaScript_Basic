// let a = [3,6,70,89,26,47,48]
const prompt = require("prompt-sync")();
// let que = prompt("Enter the Number")
// a.push(que)
// console.log(a)

// Que 2

// let arr = [4,9,3,5,6,7,5]

// do {
//      a = prompt("Enter the Number")
//      a = Number.parseInt(a)
//      arr.push(a)
    


// }while (a != 0)
// console.log(arr)

// problem 3

let b = [10,8,60,79,60,5,4,930]

let arr1 = b.filter((value)=>{
    return value%10==0;
})
console.log(arr1)

// problem 4

let d = [1,2,3,4,5,6,7]

let arr2 = d.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(arr2)

// problem 5

let e = [2,4,5,6,7,8]

let arr3 = e.map((mul)=>{
    return mul*mul;
})
console.log(arr3)

