export interface userDate {
    email: string;
    password: string;
    username: string;
    name?: string;
    surename?: string;
    dateBorn?: Date;
}
export declare class userUI implements userDate {
    email: string;
    password: string;
    username: string;
    name?: string;
    surename?: string;
    dateBorn?: Date;
    constructor(email: string, password: string, username: string, name?: string, surename?: string, dateBorn?: Date);
    singIn(): boolean;
    logIn(email: string, password: string): boolean;
}
//# sourceMappingURL=user.d.ts.map