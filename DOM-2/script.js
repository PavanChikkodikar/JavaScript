// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let paraa = document.querySelector("p");
// console.log(paraa.setAttribute("class","newClass"));

// div.style.backgroundColor="pink"

// insert elements
let newBtn = document.createElement("button");
newBtn.innerText ="click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

let heading = document.createElement("h1");
heading.innerHTML = "<i>Hi I am learning JS</i>";

document.querySelector("body").prepend(heading);


// delete elements
let para = document.querySelector("p");
para.remove();


