async function hello(){//the main goal of this funciton is to return the promise
    console.log("Hello");
}

// await - is used to pause the execution of async function


function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data",dataId);
            resolve("Success");
        },2000);
    });
}
// Async-await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

// or

// IIFE - this will execute only once
(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
})();

