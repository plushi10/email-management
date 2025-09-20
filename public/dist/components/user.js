export class userUI {
    constructor(email, password, username, name, surename, dateBorn) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.name = name;
        this.surename = surename;
        this.dateBorn = dateBorn;
    }
    singIn() {
        var _a, _b, _c;
        //method for insert the new user into the DB
        if (this.email.trim() !== '' && this.password.trim() !== '' && this.username.trim() !== '' || ((_a = this.name) === null || _a === void 0 ? void 0 : _a.trim()) !== '' || ((_b = this.surename) === null || _b === void 0 ? void 0 : _b.trim()) !== '' || ((_c = this.dateBorn) === null || _c === void 0 ? void 0 : _c.getDate()) !== 0) {
            return false;
        }
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