let a = Math.random() *100;
a = Number.parseInt(a);
let imp;
let score = 100;

const prompt = require("prompt-sync")();

while (imp!= a)
{
    score = score-1
    imp = prompt("Enter the Number")
    if (imp == a)
    {
        console.log("Congratulations ! Yoh have choose right Number")
        console.log(`You Have attept the number in ${100 - score} chances`) 
    }
    else if (imp > a && imp < 100)
    {
        console.log("Your Number is greate then the actual number ")
    }
    else if (imp < a && imp > 0)
    {
        console.log("Your Number is less then the actual number")
    }
    else 
    {
        console.log("Enter Number between 1 to 100")
    }
}
