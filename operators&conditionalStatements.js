// Arithmatic operator


let a = 5;
let b = 2;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a/b)
console.log(a%b)

console.log("####################################")
// Unary operator

console.log("a++",a++) //5
console.log(a) //6
console.log("++a",++a) //7
console.log(a) //7

console.log("a--",a--) //7
console.log(a) //6
console.log("--a",--a) //5
console.log(a) //5

// Assignment Operators
// = , += , -= , *= , /= , %= , **=

// Comparision Operators
// == , != , === , !==
// >=, <= , >, <

// Logical operators
// &&, ||, !

// Conditional Statements

// if statement
let mode = "dark";
let color;

if (mode === "light"){
    color = "white";
}

if (mode === "dark"){
    color = "black";
}

console.log(color);

// if - else statement
let mode1 = "dark";
let color1;

if (mode1 === "light"){
    color1 = "white";
}else{
    color1 = "black";
}

console.log(color1);

let x = 7
if (x%2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

// else - if statement 

let age = 90

if (age < 18){
    console.log("Junier")
}else if(age >= 18 && age < 50){
    console.log("Adult")
}else if(age >= 50 && age <= 65){
    console.log("Senior")
}else{
    console.log("Ajja/Ajji")
}

// ternary operator

let s = 30

let result  = s >= 18 ? "Adult" : "Not an Adult";
console.log(result)
// or
let result1  = s >= 18 ? console.log("Adult") : console.log("Not an Adult");

//switch

const exp = "Mango";

switch(exp){
    case "Banana":
        console.log("banana");
        break;
    case "Orange":
        console.log("Orange");
        break;
    case "Mango":
        console.log("Mangoooo");
        break;
    default:
        console.log("No fruit found");
}

// to take user input (it is temprary)
let d = prompt("Hello how are u");
console.log(d);

// how to take user input

