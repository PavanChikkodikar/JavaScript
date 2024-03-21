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
