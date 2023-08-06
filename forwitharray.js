let num = [2,3,4,5,6]

for (let i=0; i<num.length; i++)
{
    console.log(num[i])
}

// fpreach loop
num.forEach((Element)=>
{
    console.log(Element*Element)
})

// Array.from

let name = "Harry"

let arr = Array.from(name)
console.log(arr)

for (let i of num )
{
    console.log(i)
}

for (let i in num )
{
    console.log(num[i])
}
