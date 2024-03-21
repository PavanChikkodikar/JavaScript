// JS object is an entity having state and behavior(properties and methods)

const stud = { //simple object
    fullName : "Pavan C",
    marks : 85.8,
    printMarks : function(){
        console.log("marks =",this.marks);
    },
};

const employee = {
    calcTax(){
        console.log("tax rate is 10%")
    },
};

const pavan = {
    salary:30000,
};
const chirag = {
    salary:50000,
    calcTax(){
        console.log("tax rate is 20%")
    },
};
const rahul = {
    salary:75000,
    calcTax(){
        console.log("tax rate is 10%")
    },
};
const ram = {
    salary:40000,
};

// JS objects have special property called prototype, prototype  is reference to an object
pavan.__proto__ = employee;
chirag.__proto__=employee;
ram.__proto__=employee;
rahul.__proto__=employee;


// Classes 

class car{
    constructor(brand,milage){
        console.log("This is constructor");
        this.brand = brand;// this is object
        this.milage = milage;
    }
    start(){
        console.log('car started');
    }
    stop(){
        console.log("car stop");
    }
 
};
let fortuner = new  car ("fortuner",20); 
console.log(fortuner);

let tata = new  car ("tata",25); 
console.log(tata);
// let myCar = new car();
// myCar.setBrand("Toyota");

// console.log(myCar.brand); 

// myCar.start(); 
// console.log(myCar);

// myCar.stop(); 
// console.log(myCar);



// Inheritance
class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent {}

let obj = new Child();

// example-1
class Person{
    constructor(){
        console.log("Enter parent constructor");
        this.species="we are humans";
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

// Note : if parent and child class have same functions or method then child function or method will invoke or execute this is called as Method Oevrriding

class Engineer extends Person{
    constructor(branch){
        console.log("Enter child constructor")
        super(); //to invoke parent class constructor
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work(){
        console.log("Working on something");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treats patients");
    }
}


let  engineer = new Engineer();
console.log(engineer);

let engObj = new Engineer("Chem Engg"); //child class object


