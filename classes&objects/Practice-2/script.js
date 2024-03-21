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

let stud1 = new user("Pavan","pavan@gmail.com");
let stud2 = new user("Chirag","chriag@gmail.com");

let tech1 = new user("Dean","dean@gmail.com");
