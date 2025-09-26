import { userUI } from "../components/user.js";
export declare const userService: {
    addUser(email: string, password: string, username: string, name: string, surename: string, date: Date): Promise<boolean>;
    findUser(email: string, password: string, username?: string): Promise<userUI | null>;
};
//# sourceMappingURL=userRepository.d.ts.map