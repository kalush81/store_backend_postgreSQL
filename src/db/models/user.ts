//user model
import pool from ".."

export type User = {
  email: string,
  password: string
}

export class UserStore { 

  async create(): Promise<User> { 
    const conn = await pool.connect()
    const sql = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;'
    return {email: '', password: ''}
  }

  async authenticate() { 

  }

}