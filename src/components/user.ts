export interface userDate {
    email: string;
    password: string;
    username: string;
    name?: string;
    surename?: string;
    dateBorn?: Date;
}

export class userUI implements userDate {
    public email: string;
    public password: string;
    public username: string;
    name?: string;
    surename?: string;
    dateBorn?: Date;

    constructor( email: string, password: string,username: string, name?: string, surename?: string,  dateBorn?: Date){
        this.email = email;
        this.password = password;
        this.username = username;
        this.name = name;
        this.surename = surename;
        this.dateBorn = dateBorn;
    }
   

    singIn():boolean{
        //method for insert the new user into the DB
        if(this.email.trim() !== '' && this.password.trim() !== '' && this.username.trim() !== '' || this.name?.trim() !== '' || this.surename?.trim() !== '' || this.dateBorn?.getDate() !== 0){
            return false;
        }            
        return true;
    }

    logIn(email: string, password: string):boolean{
        //when the DB is set up, this function should check if the credentials have been saved in the DB or not 
        if((this.email === email) && (this.password === password)){
            return true;
        }else{
            return false;
        }
    }

}