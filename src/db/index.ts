import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { user, host, database, database_test, password, port, ENV } =
  process.env;

const pool: Pool = new Pool({
  user,
  host,
  database: ENV === "test" ? database_test : database,
  password,
  port: Number(port),
});

pool.on("error", (err, client) => {
  client.release();
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;
