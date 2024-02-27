// variables - var,let,const
//New JS - ES6 (we have let and const)

let name = "Pavan"
let age = 50
let a;
const PI = 3.14
// const b;

console.log(name)
console.log(age)
console.log(PI)
console.log(a)
// console.log(b)


//blocks
{
    let a = 10;
    console.log(a);
}
{
    let a = 15;
    console.log(a);
}

let x = BigInt("123")
let y = Symbol("hello")

const stud = {
    name : "Pavan",
    age : 22,
    city : "Mudhol"
};
stud["age"] = stud["age"] + 1
stud["name"] = "Pavan V C"

console.log(stud["name"])
console.log(stud.age)