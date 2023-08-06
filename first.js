let a =10
let b = 20
console.log(a+b)

obj = {
    a:1,
    b:2,
    c:3
}

console.table(obj)

console.warn("Heyy dont do this")

console.assert(5>6)

console.time("forloop")
for (let i=0; i<5; i++){
    console.log(i)
}
console.timeEnd("forloop")
