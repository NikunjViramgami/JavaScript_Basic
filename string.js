let name = "Nikunj"
console.log(name)
console.log(name[0])
console.log(typeof(name))
console.log(name.lengh)

// Template literals

let boy1 = "pramod"
let boy2 = "Akhil"

// let sentence = `boy1 is a friend of boy2`;

// Backtick
let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence)

// Escape sequence charactor

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
console.log(part)

let fruits = 'bana\'na'
console.log(fruits)
console.log(fruits.length)

let sports = "Cricket"
let sports2 = "football"
console.log(sports.length)
console.log(sports.toUpperCase())
console.log(sports.toLowerCase())
console.log(sports.slice(2,5))
console.log(sports.slice(2))
console.log(sports.replace("Cricket","Hocky"))
console.log(sports.concat(sports2))

// sports[3] = "k" its not valid cant be change 

// Remove space
let a = "    Aman    "
console.log(a.trim())


let fr = "Nikunj" + "Sunny"
console.log(fr)

const sen = "You have a bright student of mscit divb"
const sen2 = "bright"
console.log(sen.includes(sen2))

console.log(`the word ${sen2}  ${sen.includes(sen2)? 'is': 'is not'} in the sentence`)

let x = "please give rs 1000"
let y = Number.parseInt(x.slice(15))
console.log(y)
console.log(typeof(y))

let xyc = 'It\'s alright';
console.log(xyc)

let d = "John";
let t = new String("John");
console.log(typeof d + " " + typeof t)

let text1 = "HELLO WORLD";
let char = text1.charAt(0);

console.log(char)
console.log(text1[0])



