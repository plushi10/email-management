export class userUI {
    constructor(email, password, username, name, surename, dateBorn) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.name = name;
        this.surename = surename;
        this.dateBorn = dateBorn;
    }
    singIn(email, password, username, name, surename, dateBorn) {
        //method for insert the new user into the DB
        return true;
    }
    logIn(email, password) {
        //when the DB is set up, this function should check if the credentials have been saved in the DB or not 
        if ((this.email === email) && (this.password === password)) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=user.js.map