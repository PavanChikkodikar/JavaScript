let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmousedown = (e) =>{
//     console.log("you are inside div");

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// };


// Event Listener

btn1.addEventListener("click", (e) => {
    console.log("Button 1 as clicked - handler-1");
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.clientX,e.clientY);
});

btn1.addEventListener("click", () => {
    console.log("Button 1 as clicked - handler-2");
});

const handler3 =  () => {
    console.log("Button 1 as clicked - handler-3");
};
btn1.addEventListener("click", (handler3));


btn1.addEventListener("click", () => {
    console.log("Button 1 as clicked - handler-4");
});

btn1.removeEventListener("click",(handler3));








