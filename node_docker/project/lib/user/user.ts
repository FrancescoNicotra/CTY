import connection from "../db_connect/connection";

export default class User {
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  // Create
  public async create(name: string, email: string, password: string) {
    try {
      const rows = (await connection).execute(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, password]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
  // Read
  public async read(email: string) {
    try {
      const rows = (await connection).execute(
        `SELECT name FROM users WHERE email = ${email}`
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
  // Update
  public async update(
    id: number,
    name: string,
    email: string,
    password: string
  ) {
    try {
      const rows = (await connection).execute(
        `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`,
        [name, email, password, id]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
  // Delete
  public async delete(id: number) {
    try {
      const rows = (await connection).execute(
        `DELETE FROM users WHERE id = ?`,
        [id]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
}
