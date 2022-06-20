import pool from './db'
const fun = async () => { 
  const res = await pool.query('SELECT NOW()', [])
  //res.release()
  console.log(res.rows[0])
}

fun();