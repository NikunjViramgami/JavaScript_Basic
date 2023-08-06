// for (let i =0; i<30; i++)
// {
//     console.log("Number=",i);
// }

const prompt = require("prompt-sync")();

let sum =0;
let n = prompt("Enter the number")
n = Number.parseInt(n)
for (let i =0; i<n; i++)
{
    sum+=i
}
console.log("number is"+n+"SUm is"+sum)
//  console.log(i)  in case uhh have take in var then give output of 5


 let Factorial =1;
let choose = parseInt(prompt("Enter the number?"))
 choose = Number.parseInt(n)
for (let i =1; i<choose; i++)
{
    Factorial*=i
}
console.log("number is"+choose+"Factorial is"+Factorial)

// for in loop
let name =
 {
    "Nikunj" : 89,
    "Raj" : 50,
    "hetvi" : 89

}
// for in loop
//  for ( a in name)
//  {
    console.log("Name is"+a+"Marks is"+name[a])
//  }

// For of loop
//  for (b of "Nikunj")
//  {
//     console.log(b)
//  }