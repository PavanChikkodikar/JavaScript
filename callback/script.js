function hello(){
    console.log("Hello");
}
setTimeout(hello,2000); // 2 seconds

// OR 
// Asynchronous
console.log("one");
console.log("two");

setTimeout(() =>{
    console.log("How are u");
},4000);

console.log("three");
console.log("four");


// Callbacks
function sum(a,b){
    console.log(a+b);
}
function cala(a,b,sumCallback){
    sumCallback(a,b);
}
cala(5,7,sum);




// callback hell

function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if (getNextData){
            getNextData();
        }
    },2000);
}

// callback hell
// to solve this callback hell problems we have promises
getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
        console.log("getting data3...");
        getData(3, () =>{
            console.log("getting data4...");
            getData(4);
        });
    });
});