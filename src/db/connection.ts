import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MatteLuna123!",
    database: "email-management",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

export async function testConnection() {
    try {
        const conn = await pool.getConnection();
        console.log("success");
        conn.release();
    } catch (error) {
        console.log("error during the connection");
    }
}