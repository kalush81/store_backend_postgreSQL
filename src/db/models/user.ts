import pool from "..";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export type User = {
  email: string;
  password: string;
};

const { pepper, saltRounds } = process.env;

export class UserStore {
  async create(u: User): Promise<User> {
    const hash = bcrypt.hashSync(
      u.password + pepper,
      parseInt(saltRounds as string)
    );
    const conn = await pool.connect();
    const sql =
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;";
    const result = await conn.query(sql, [u.email, hash]);
    const user_id = result.rows[0];
    return user_id;
  }

  async authenticate() {
    //to be implemented for login
  }
}
