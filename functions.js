// Functions

function fun(){
    console.log("Hello");
}
fun(); //function call or invoke


function funn(msg,num){//parameter
    console.log(msg,num);
}
funn("Hi",100); //argument


function sum(n1,n2){
    console.log(n1+n2);
}
sum(10,20);


function add(a,b){//parms are local  to the function only
    //local variables
    x = a+b;
    return x;
}
let y = add(10,20);
console.log(y);


//Arrow Functions

let arrowFun = (a1,b1) =>{
    console.log(a1+b1);
    // return a1+b1;
};
arrowFun(5,7);

let arrow = () =>{
    console.log("Hi Hello")
};
arrow();


// vowels in String using arrow fun

let countVowels = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || 
        char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
};
countVowels("Pavan")

// vowels in String without using arrow fun

function countVowel(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || 
        char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
};
countVowel("Chirag")


// callback function
//for Each loop (Higher order function/methods)
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});
// or
let arr1 = ["P","B","C"];
arr1.forEach((val)=>{
    console.log(val) //val.toUpperCase()
});

let arr2 = ["P","B","C"];
arr2.forEach((val,idx,arr)=>{
    console.log(val,idx,arr) 
});

let n = [2,3,4,5,6,7,8];

n.forEach((n) => {
    console.log(n*n);
});

//map
let n1 = [2,3,4,5,6,7,8];

let newArr = n1.map((val) =>{
    return val;
});
console.log(newArr);

//filter
let n2 = [2,3,4,5,6,7,8];
let newArr1 = n2.filter((val) =>{
    return val%2===0;
});
console.log(newArr1);

//reduce - returns a single value

let array = [1,2,3,4,5];

let output = array.reduce((preValue,curValue) => {
    return  preValue + curValue;
});
console.log(output);

//find largest of an array
let array1 = [1,2,3,4,5];

let output1 = array.reduce((preValue,curValue) => {
    return  preValue > curValue ? preValue : curValue;
});
console.log(output1);

//find smallest of an array
let array2 = [1,2,3,4,5];

let output2 = array.reduce((preValue,curValue) => {
    return  preValue < curValue ? preValue : curValue;
});
console.log(output2);

// marks greater than 90
let mrk = [45,97,98,47,100,90];

let topMrk = mrk.filter((val) => {
    return val > 90;
});
console.log(topMrk);


//find 1 to n, find sum and product
let number = prompt("Enter no ");

let ab = [];

for(let i = 1;i<=number;i++){
    ab[i-1] = i;
}
console.log(ab);

let sum1 = ab.reduce((prev,curr) =>{
    return prev+curr;
});

console.log("Sum ", sum1)

let fact = ab.reduce((prev,curr) =>{
    return prev*curr;
});

console.log("Factorial ", fact)
