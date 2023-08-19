import connection from "@/lib/db_connect/connection";
import { get } from "http";
const bcrypt = require("bcryptjs");

export default class User {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }
  // Create
  public async create(name: string, email: string, password: string) {
    try {
      const rows = (await connection).execute(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, password]
      );
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  // Read
  public async read(email: string) {
    try {
      const rows = (await connection).execute(
        `SELECT name FROM users WHERE email = '${email}'`
        //                                 ^         ^
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }

  // checkPassword
  public async checkPassword(email: string, password: string) {
    try {
      const rows = (await connection).execute(
        `SELECT password FROM users WHERE email = '${email}'`
        //                                     ^         ^
      );
      const hash = await rows.then((result: any) => {
        return result[0][0].password;
      });
      console.log(hash);
      const match = await bcrypt.compare(password, hash);
      return match;
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

  //getNameById
  public async getNameById(id: number): Promise<string | undefined> {
    try {
      const [rows]: any = await (
        await connection
      ).execute(`SELECT name FROM users WHERE id = ?`, [id]);
      const name = (rows[0] && rows[0].name) || undefined;
      return name;
    } catch (error) {
      console.log(error);
    }
  }

  //getName
  public async getName(email: string): Promise<string | undefined> {
    try {
      const [rows]: any = await (
        await connection
      ).execute(`SELECT name FROM users WHERE email = ?`, [email]);
      const name = (rows[0] && rows[0].name) || undefined;
      return name;
    } catch (error) {
      console.log(error);
    }
  }

  public async getUserId(email: string): Promise<number | undefined> {
    try {
      const [rows]: any = await (
        await connection
      ).execute(`SELECT id FROM users WHERE email = ?`, [email]);
      const userId = (rows[0] && rows[0].id) || undefined;
      return userId;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async addProfilePic(profilePicUrl: string, email: string) {
    try {
      const rows = (await connection).execute(
        `UPDATE users SET profile_pic_url = ? WHERE email = ?`,
        [profilePicUrl, email]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
  public async getProfilePic(email: string) {
    try {
      const rows = (await connection).execute(
        `SELECT profile_pic_url FROM users WHERE email = ?`,
        [email]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
  public async updateProfilePic(profilePicUrl: string, email: string) {
    try {
      const old_profile_pic = this.getProfilePic(email);
      const rows = (await connection).execute(
        `UPDATE users SET profile_pic_url = ? AND old_profile_pic_url = ? WHERE email = ?`,
        [profilePicUrl, old_profile_pic, email]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
}
