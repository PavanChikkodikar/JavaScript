let DATA = "secret information";

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    
    viewData(){
        console.log("data = ",DATA);
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let stud1 = new user("Pavan","pavan@gmail.com");
let stud2 = new user("Chirag","chriag@gmail.com");

let tech1 = new user("Dean","dean@gmail.com");

let admin1 = new Admin("Admin","admin@gmail.com");


// Error handling
let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
try{
    console.log("a+b = ", a+c);
} catch(err){ //handle error
    console.log(err);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);

