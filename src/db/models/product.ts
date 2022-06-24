import pool from "../index";

export type Product = {
  id?: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await pool.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`can not get products, ${error}`);
    }
  }

  async getOnById(id: string): Promise<Product> {
    try {
      const conn = await pool.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`could not get that jacket, ${error}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const conn = await pool.connect();
      const sql =
        "INSERT INTO products (name, description, quantity, price, category) VALUES($1, $2, $3, $4, $5) RETURNING *";
      const result = await conn.query(sql, [
        p.name,
        p.description,
        p.quantity,
        p.price,
        p.category
      ]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (error) {
      throw new Error(`could not upload new jacket, ${error}`);
    }
  }

  async delete(id: string): Promise<number> {
    try {
      const conn = await pool.connect();
      const sql = "DELETE FROM products WHERE id=($1) RETURNING id";
      const result = await conn.query(sql, [id]);
      conn.release();
      const deleted_id: number = result.rows[0].id;
      return deleted_id;
    } catch (error) {
      throw new Error(`could not remove product, ${error}`);
    }
  }
}