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

