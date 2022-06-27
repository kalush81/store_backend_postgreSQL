//user model
import pool from "..";

export type User = {
  email: string;
  password: string;
};

export class UserStore {
  async create(u: User): Promise<User> {
    const conn = await pool.connect();
    const sql =
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;";
    const result = await conn.query(sql, [u.email, u.password]);
    return result.rows[0];
  }

  async authenticate() {
    //to be implemented for login
  }
}
