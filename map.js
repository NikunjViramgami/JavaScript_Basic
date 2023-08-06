// let a = [45,78,90,12]
// let arr = a.map((element,index,array)=>{
//     console.log(element,index,array)
//     return element+index+1;
// })
// console.log(arr)

let b = [2,4,6,8,0]
let arr2 = b.filter((value)=>{
    return value<5;
})
console.log(arr2)

let c = [10,20,30,40,50]
let arr3 = c.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr3)