const hello = () =>{
    console.log("Helo how r uhh");
    return "Heyyy";
}

function Average(a,b)
{
    return (a+b)/2;
}


// Arrow Function
const sum = (p,q) =>{
    return p+q;
}

let x = 2;
let y = 3;
let z = 4;


let v =hello();
console.log(v)
console.log("Average of a and b",Average(x,y))
console.log("Average of c and b",Average(z,y))
console.log("Average of a and c",Average(x,z))
console.log("sum of a and b",sum(x,y))

const xyz = {
    Name: "Nikunj",
    Age : 18,
    Hobby: "Cricket",
    LastName : "Viramgami",

    FullName : function(){
        return this.Name + " " + this.LastName;
    }
}
console.log(xyz.FullName())