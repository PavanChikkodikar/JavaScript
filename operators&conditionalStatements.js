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