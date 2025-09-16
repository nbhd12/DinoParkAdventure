import { Pool } from "pg";
import { Database } from "../libs/database";

export abstract class Repository {
  protected pool: Pool;
  
  constructor() {
    this.pool = Database.getPool();
  }
}