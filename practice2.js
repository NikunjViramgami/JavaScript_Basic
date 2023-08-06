// #que1
const prompt = require("prompt-sync")();
// let Q = prompt("Enter the age?")

// if (Q>10 && Q<20)
// {
//     console.log("Youare between 10 to 20")
// }


let b = prompt("Enter the Number")
b = Number.parseInt(b)

if (b%2==0 && b%3==0)
{
    console.log("Number is divisable by 2 nd 3")
}
else 
{
    console.log("Number is not divisable by 2 nd 3")
}

