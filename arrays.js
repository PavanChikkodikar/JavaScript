// let arr = [90,89,78,67,45,35,"Hi",7.9]
// console.log(arr)

// // checking a length and type of an array
// console.log(arr.length)
// console.log(typeof arr)

// // updating an array
// arr[4] = 31
// console.log(arr)
// arr[6] = "Hello"
// console.log(arr)

// //looging over an array
// let arr1 = ["Hi","hello","How are u"]

// for (let i=0;i<arr1.length;i++){
//     console.log(arr1[i])
// }

// // for of loop
// for (let word of arr1){
//     console.log(word);
// }
// for (let word of arr1){
//     console.log(word.toLowerCase());
// }
// for (let word of arr1){
//     console.log(word.toUpperCase());
// }

// // find average marks
// let marks = [23,45,67,89,100];
// let sum = 0;
// for (let i=0;i<marks.length;i++) {
//     sum = sum + marks[i];
    
// }
// console.log("Sum :",sum)
// let avg = sum/marks.length;
// console.log(`Average Marks: ${avg}`);

//percentage
let items = [230,450,670,890,100];

// method 1
// let i=0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer: ${items[i]}`)
//     i++;
// }

// method 2
for (let i=0;i<items.length;i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log(items)

// push
let a = [1,2,3,4,"Hi","Hello"]

a.push("How are u","Buy")

console.log(a);

// pop
let a1 = [1,2,3,4,"Hi","Hello"]
let delVal = a1.pop();

console.log(a1);
console.log(delVal);

// toString
let a2 = [1,2,3,4,"Hi","Hello"]
console.log(a2.toString());

let a3 = [1,2,3,4]
console.log(a3.toString());

// Concat
let b = [1,2,3]
let b1 = [4,5,6]
let b3 = b.concat(b1)
console.log(b3);
// or
let b4 = [1,2,3]
let b5 = [4,5,6]
let b6 = [7,8,9]
let b7 = b4.concat(b5,b6)
console.log(b7);

// unshift - works like push
let b9 = ["7","8","9"];
b9.unshift("6");


// shift - works like pop
let b10 = ["7","8","9"];
let b11 = b10.shift("6");
console.log("deleted",b11);

//Slice
let pav = ["Pavan","Venk","Shri","Ex"]
console.log(pav.slice(1,2));
console.log(pav.slice(1)); 


//Splice - this will changen the original array

let she = [1,2,3,4,5,6,7];
//first deleting the elements and then adding the new elements at deleted positions 
// she.splice(2,2,101,102);

// Add element
// she.splice(2,0,101);

// delete element
// she.splice(3,1)

// replace element
she.splice(2,1,102)

let cmp = ["B","M","U","G","I","N"]
cmp.shift();
console.log(cmp);
cmp.splice(2,1,"O")
console.log(cmp);
cmp.push("A");
console.log(cmp);