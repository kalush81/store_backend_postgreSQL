import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const {
  user,
  user_test,
  host,
  database,
  database_test,
  password,
  password_test,
  port,
  ENV,
} = process.env;

const pool: Pool = new Pool({
  user: ENV === "test" ? user_test : user,
  host,
  database: ENV === "test" ? database_test : database,
  password: ENV === "test" ? password_test : password,
  port: Number(port),
});

pool.on("error", (err, client) => {
  client.release();
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool! as Pool;
