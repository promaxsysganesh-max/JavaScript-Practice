let DATA="some credentials";
class User{
    constructor(userName,email){
        this.userName=userName;
        this.email=email;
    }

    viewData(){
        console.log("User name:",this.userName);
        console.log("User Mail:",this.email);
        console.log("DATA:",DATA);
    }
}

class Admin extends User{
    editData(userName,email){
        this.userName=userName;
        this.email=email;
        DATA="something new";
        console.log("DATA:",DATA);
    }
}

let userObj=new User("Ganesh Bachate","ganeshb@gmail.com");
userObj.viewData();

let adminObj=new Admin();
adminObj.editData("Ganesh Bachate","gsb@gmail.com");

userObj.viewData();
adminObj.viewData();