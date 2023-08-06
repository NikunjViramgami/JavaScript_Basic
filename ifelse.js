const prompt = require("prompt-sync")();
// // var alert = window['alert'];

// let a = prompt("Wht is your age?")
// // Type Casting 
// console.log(typeof a) 


// a = Number.parseInt(a)
// console.log(typeof a)

// if (a<0)
// {
//     console.log("Enter valid Age")
// }
// else if(a<9)
// {
//     console.log("You are a kid")
// }
// else if(a>=9 && a<18)
// {
//     console.log("You are not a kid You are adult")
// }
// else
// {
//     console.log("You are ready to Rock")
// }

// console.log("You can",(a<18? "Not Drive" : "Drive"))


let Que = prompt("Choose your fruits?")
// const expr = "banana"
switch(Que)
{
    case 'orange' :
        console.log("You have chose orange");
        break;
    case 'banana' : 
        console.log("You have choose banana");
        break;
    default:
        console.log("sorry")
    
}