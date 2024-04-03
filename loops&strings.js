// for loop

for(let i=1;i<=5;i++){
    console.log("Hi How are u!");
}
console.log("Loop ended");

//to find sum of 1 to 10
let sum = 0;
let n = 10;

for (let i=1;i<=n;i++){
    sum = sum + i;
}
console.log("Sum",sum)

// for of loop - this is used for string and arrays
let str = "Pavan";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("size of str",size)

// for  in - this is used for objects
let stud = {
    name : "Pavan",
    age : 22,
    cgpa : 8.2,
    grade : "FCD"
};

for (let key in stud){
    console.log("key",key,"value",stud[key])
}



// let gNum = 25;

// let userInput = prompt("guess no");
// while(userInput != gNum){
//     userInput = prompt("u entered wrong  no, guess again");
// }
// console.log("Correct no")



// strings
let s = "Pavan";
let a = s.length;
console.log(a)
console.log(s[2]) // this will print 2nd index i.e 'v'

//Template literals
let q =  `this is template literals`
console.log(q);


let stud1 = {
    name : "Pavan",
    age1 : 22,
};

// to create strings by doing substiuation of placeholders is called as string interpolation
let res = `My name is ${stud1.name} and my age is ${stud1.age1}`;
console.log(res);


// string methods
// strings are immutables in JS, we cant change original string 
// String is a sequence of characters used to represent text

let st = "   Pavan Chikkodikar   "
let st2 = "Mudhol"
st = st.toUpperCase(); // makes complete string uppercase
console.log(st);

st = st.toLowerCase(); // makes complete string lowercase
console.log(st);

st = st.trim(); //remove white spaces from above string
console.log(st);

st = st.slice(2,8);  //van Ch
console.log(st);

st = st.concat(st2); // combines two strings
console.log(st);
// or
st = st + st2;
console.log(st);

st = st.replace("Mudhol", "MDL") // this will replace only first  occurrence of string to another string
console.log(st);

st = st.replaceAll("Mudhol", "MDL") //this will replace  all occurrences string with another string
console.log(st);

st = st.charAt(5) // used to retrieve the character at a specified index within a string
console.log(st);