for(let i=1;i<=5;i++){
    console.log("Hi How are u!");
}
console.log("Loop ended");

//sum of 1 to 10
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

// for of in - this is used for objects
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
console.log(s[2])

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

let st = "   Pavan Chikkodikar   "
let st2 = "Mudhol"
st = st.toUpperCase();
console.log(st);

st = st.toLowerCase();
console.log(st);

st = st.trim(); //remove white spaces from above string
console.log(st);

st = st.slice(2,8);
console.log(st);

st = st.concat(st2);
console.log(st);
// or
st = st + st2;
console.log(st);

st = st.replace("Mudhol", "MDL")S
console.log(st);

st = st.replaceAll("Mudhol", "MDL")
console.log(st);

st = st.charAt(5)
console.log(st);