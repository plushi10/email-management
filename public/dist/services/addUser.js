import { pool, testConnection } from "../db/connection.js";
import { userUI } from "../components/user.js";
async function addUser(email, password, username, name, surename, date) {
    await testConnection();
    const sql = "INSERT INTO `user`  (email, password, username, name, surename, date) VALUES (?,?,?,?,?,?);";
    const values = [email, password, username, name, surename, date];
    try {
        const [rows] = await pool.query(sql, values);
        console.log("succes, user data : ", rows);
    }
    catch (error) {
        console.log(error);
    }
}
//node public/dist/services/addUser.js
addUser("john.doe@example.co", "strongP@ssw0rd", "johndoe", "John", "Doe", new Date("1990-05-20"));
//# sourceMappingURL=addUser.js.map