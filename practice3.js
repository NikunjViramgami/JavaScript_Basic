let marks ={
    Nikunj:34,
    suyash:67,
    preeti:90,
    love:90
}
// Object.keys(marks) = Nikunj,suyash,preeti,love

// for (let i=0;i<Object.keys(marks).length;i++)
// {
//     console.log("the name is" + Object.keys(marks)[i] + "marks" + marks[(Object.keys(marks)[i])]);
// }

// problem 2 using for in loop

// for (key in marks)
// {
//     console.log("Name is" + key + "Marks Are" + marks[key])
// //     console.log("the name is" + Object.keys(marks)[i] + "marks" + marks[(Object.keys(marks)[i])]);
//  }

// prcoblem 3

// const prompt = require("prompt-sync")();

// let cn =45;
// let i;

// while (i != cn)
// {
//     console.log("Try Again");
//     i = prompt("Enter the Number");
    
// }
// console.log("You have select correct Number")

// problem 4

function Mean(a,b,c,d,e)
{
    return (a+b+c+d+e)/5;
}

let p=10;
let q=20;
let r=30;
let s=33;
let t=25;

console.log("The mean of five Number is",Mean(p,q,r,s,t))