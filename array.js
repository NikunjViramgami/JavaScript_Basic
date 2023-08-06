let a = [1,2,34,"nikunj",false]

console.log(a)
console.log(a[3])

// change the value
a[2] = 89

// add the value in array
a[5] = "Ramesh" 

console.log(a)
console.log(a.length)
console.log(typeof (a))

for (let i=0; i<=a.length; i++){
    console.log(a[i])
}

// Array Methods

let num = ["nikunj","harsh","Maitrii","Gopii"]
let b = num.toString()
console.log(b)

let c = num.join("_")
console.log(c)

console.log(typeof(b))

// pop return last element in array
let d = num.pop()
console.log(d)

let e = num.push(90)
console.log(e)
console.log(num)

// REMOVE FIRST ELEMENT IN ARRAY
let f = num.shift()
console.log(f,num)

// ushift add value in first 
let g = num.unshift(89)
console.log(g,num)

let numbers = [1,5,8,9,0,45]
let num2 = [67,90,34,56,77]
console.log(numbers)

// delete numbers[0]
// console.log(numbers)
// // lengh is not chang when uhh have delete
// console.log(numbers.length)

// concate two array
let newarray = numbers.concat(num2)
console.log(newarray)

let x = Number.parseInt(numbers)
console.log(typeof(x))
numbers.sort()

console.log(numbers)

// create a function of compare sort for ascending order

let compare = (a,b) =>{
    return a-b;
}

numbers.sort(compare)
console.log(numbers)

// create a function of compare sort for decending order

let compare1 = (a,b) =>{
    return b-a;
}

numbers.sort(compare1)
numbers.reverse()
console.log(numbers)


// splice and slice

// splice is used to which position uhh have add the number in Array
// for exmaple 3 is a postion of uhh have add in number 
// 2 is define how many element uhhh have remove
// 122,123 is define add the number 

// original array modifies in splice 

let intnum = [4,6,0,2,44,66,88]

// intnum.splice(3,2,122,123)
let deletedValues = intnum.splice(3,2,122,123)
// console.log(intnum)
console.log(deletedValues)
// console.log(intnum)

// in slice original array in not modified

let newone = intnum.slice(3,5)
console.log(newone)

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren = array1.concat(array2, array3);

console.log(myChildren)

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

// 2 is define the position when uhh have add new alement in array1
// 0 is defines how many item uhh will delete

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(3);
console.log(fruit)
console.log(citrus)