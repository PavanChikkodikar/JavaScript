// Promises - eventual completion of task, it is an object in JS, and solution to callback hell


//3 states in promise - pending, fulfilled(resolved), rejected


let promise = new Promise((resolve, reject) => {
    console.log("I am promise");
    resolve(123);
    // reject("Some error");
});