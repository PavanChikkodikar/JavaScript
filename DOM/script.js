//  the Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page as a tree-like structure, where each node represents a part of the document, such as elements, attributes, and text. The DOM provides a way for programs to interact with web pages dynamically


// null is an empty object in JS

// //DOM Manipulation 3 ways to access the elements

// let button = document.getElementById("button"); // this will return the value of heading
// console.dir(button);


// let headings = document.getElementsByClassName("heading")// return html collection (similar to Array)
// console.dir(headings);
// console.log(headings);


// let parags = document.getElementsByTagName("para");
// console.dir(parags);


//Query selector - this will return node list


let firstEle = document.querySelector(".heading");
console.dir(firstEle);


let allParaElements = document.querySelectorAll(".heading");
console.dir(allParaElements);


let button = document.querySelector("#button");
console.dir(button);


// Properties
// 1. tagName
// 2. innerText
// 3. innerHTML
// 4. textContent






