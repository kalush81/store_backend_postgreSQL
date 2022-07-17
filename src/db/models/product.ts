import pool from "../index";

export type Product = {
  id?: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await pool.connect();
      const sql = "SELECT * FROM clothes_schema.products";
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
      const sql = "SELECT * FROM clothes_schema.products WHERE id=($1)";
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
        "INSERT INTO clothes_schema.products (name, description, quantity, price, category) VALUES($1, $2, $3, $4, $5) RETURNING *;";
      const result = await conn.query(sql, [
        p.name,
        p.description,
        p.quantity,
        p.price,
        p.category,
      ]);
      const product = result.rows[0];
      console.log(product);
      conn.release();
      return product;
    } catch (error) {
      throw new Error(`could not upload new jacket, ${error}`);
    }
  }

  async delete(id: string): Promise<number> {
    try {
      const conn = await pool.connect();
      const sql =
        "DELETE FROM clothes_schema.products WHERE id = $1 RETURNING id;";
      const result = await conn.query(sql, [id]);
      conn.release();
      const deleted_id: number = result.rows[0].id as number;
      return deleted_id;
    } catch (error) {
      throw new Error(`could not remove product, ${error}`);
    }
  }
  //fix the logic so only changed values will be edited
  async edit(p: Product): Promise<Product> {
    try {
      const conn = await pool.connect();
      const sql = `UPDATE clothes_schema.products SET "name" = $2, "description" = $3, "quantity" = $4, "price" = $5, "category" = $6 WHERE id=$1 RETURNING *;`;
      const result = await conn.query(sql, [
        p.id,
        p.name,
        p.description,
        p.quantity,
        p.price,
        p.category,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`could not edit product ${p.name}, ${error}`);
    }
  }
}
