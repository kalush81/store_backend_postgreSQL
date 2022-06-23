import pool from "../index";

export type Jacket = {
  id?: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
};

export class JacketStore {
  async index(): Promise<Jacket[]> {
    try {
      const conn = await pool.connect();
      const sql = "SELECT * FROM jacket";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`can not get jackets, ${error}`);
    }
  }

  async getOnById(id: string): Promise<Jacket> {
    try {
      const conn = await pool.connect();
      const sql = "SELECT * FROM jacket WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`could not get that jacket, ${error}`);
    }
  }

  async create(j: Jacket): Promise<Jacket> {
    try {
      const conn = await pool.connect();
      const sql =
        "INSERT INTO jacket (name, description, quantity, price) VALUES($1, $2, $3, $4) RETURNING *";
      const result = await conn.query(sql, [
        j.name,
        j.description,
        j.quantity,
        j.price,
      ]);
      const jacket = result.rows[0];
      conn.release();
      return jacket;
    } catch (error) {
      throw new Error(`could not upload new jacket, ${error}`);
    }
  }

  async delete(id: string): Promise<number> {
    try {
      const conn = await pool.connect();
      const sql = "DELETE FROM jacket WHERE id=($1) RETURNING id";
      const result = await conn.query(sql, [id]);
      conn.release();
      const deleted_id:number = result.rows[0].id
      return deleted_id
    } catch (error) {
      throw new Error(`could not remove jacket, ${error}`);
    }
  }
}
