import { pool, testConnection } from "../db/connection.js";
import { userUI } from "../components/user.js";
// addUser("john.doe@example.co","strongP@ssw0rd","johndoe","John","Doe",new Date("1990-05-20"));
//
// addUser function work
export const userService = {
    async addUser(email, password, username, name, surename, date) {
        await testConnection();
        //type DBuser = userDate & RowDataPacket;
        const sql = "INSERT INTO `user`  (email, password, username, name, surename, date) VALUES (?,?,?,?,?,?);";
        // hased the password before the insert into db
        // check if the user is already insert into the db
        const values = [email, password, username, name, surename, date];
        try {
            const [rows] = await pool.query(sql, values);
            console.log("succes, user data : ", rows);
            return rows.affectedRows === 1;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    },
    //node public/dist/services/userRepository.js
    // find the user
    async findUser(email, password, username) {
        await testConnection();
        let sql;
        let values;
        if ((username === null || username === void 0 ? void 0 : username.trim()) !== '') {
            sql = "select u.email, u.password from user u where u.email = ? and u.password = ?;";
            values = [email, password];
        }
        else {
            sql = "select u.email, u.password from user u where u.email = ? and u.password = ? and u.username = ?;";
            values = [email, username];
        }
        try {
            const [rows] = await pool.query(sql, values);
            console.log(rows);
            const row = rows[0];
            if (!row)
                return null;
            const user = new userUI(row.email, row.password, row.username, row.name, row.surename, row.dateBorn);
            return user;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
};
//# sourceMappingURL=userRepository.js.map