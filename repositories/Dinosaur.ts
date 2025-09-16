import { Database } from "../libs/database";
import { Repository } from "../libs/repository";

export class DinosaurRepository extends Repository {
  findAll = async (): Promise<any[]> => {
    const query = {
      name: "fetch-all-dinos",
      text: `
        SELECT id, common_name, description, diet
        FROM dinos
        ORDER BY common_name
      `,
    };

    const result = await this.pool.query(query);
    return result.rows;
  };
}


