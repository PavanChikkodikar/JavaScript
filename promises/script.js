// Promises - eventual completion of task, it is an object in JS, and solution to callback hell


//3 states in promise - pending, fulfilled(resolved), rejected


const getPromise =() =>{
return new Promise((resolve, reject) => {
    console.log("I am promise");
    resolve("Success");
    // reject("Network error");
});
};

let promise = getPromise();
promise.then((res) =>{
    console.log("promise fulfilled",res);
});

promise.catch((err) => {
    console.log("rejected",err);
});

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data1");
            resolve("Success");
        },4000)
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data2");
            resolve("Success");
        },4000)
    });
}

console.log("Fetching data1");
asyncFunc1().then((res) =>{
    console.log("Fetching data2");
    asyncFunc2().then((res) =>{});
});
