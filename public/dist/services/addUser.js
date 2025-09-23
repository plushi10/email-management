import { pool, testConnection } from "../db/connection.js";
import { userUI } from "../components/user.js";
async function main() {
    var _a;
    await testConnection();
    const [rows] = await pool.query("SELECT * FROM user");
    console.log(rows);
    const user = rows.map(row => new userUI(row.email, row.password, row.username, row.name, row.surename, row.dateBorn));
    const email = (_a = user[0]) === null || _a === void 0 ? void 0 : _a.email;
    console.log(email);
}
//node public/dist/services/addUser.js
main();
//# sourceMappingURL=addUser.js.map