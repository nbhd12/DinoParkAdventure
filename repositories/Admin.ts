import { Pool } from "pg";
import { Repository } from "../libs/Repository";


export class AdminRepository extends Repository {
 

  public async findIfExists(username: string, password: string): Promise<boolean> {
    const query = {
      text: `SELECT COUNT(id) AS exist
             FROM admins
             WHERE username = $1 AND password = $2`,
      values: [username, password],
    };

    try {
      const result = await this.pool.query(query);
      return parseInt(result.rows[0].exist) > 0;
    } catch (error) {
      console.error("DB error in findIfExists:", error);
      return false;
    }
  }
}