import { Pool, QueryResult } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { user, host, database, password, port } = process.env;

const pool = new Pool({
  user,
  host,
  database,
  password,
  port: Number(port),
});

pool.on("error", (err, client) => {
  client.release();
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;
