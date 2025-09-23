import { pool, testConnection} from "../db/connection.js";
import { userUI, type userDate } from "../components/user.js";
import type { RowDataPacket } from "mysql2";
async function main() {
    await testConnection();

    type DBUser = userDate & RowDataPacket;
    const [rows] = await pool.query<DBUser[]>("SELECT * FROM user"); 
    console.log(rows);
    const user = rows.map(row => new userUI(
        row.email,
        row.password,
        row.username,
        row.name,
        row.surename,
        row.dateBorn
    ));
    const email = user[0]?.email;
    console.log(email);

}
//node public/dist/services/addUser.js
main();

