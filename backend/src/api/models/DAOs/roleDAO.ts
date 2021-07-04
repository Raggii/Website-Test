import pgPromise from "pg-promise";
import db from "../../../config/dbConfig.js";
import { RoleType } from "../roleModel.js";

export class RoleDAO {
  private static _instance: RoleDAO = null;
  private conn = db;

  /**
   * Returns the RoleDAO global instance.
   */
  public static get Instance(): RoleDAO {
    // if the instance has not yet been instantiated, we instantiate it.
    if (this._instance === null) {
      this._instance = new this();
    }

    // Return the instance
    return this._instance;
  }

  private constructor() {}

  /**
   * Initiates the role table, and ensures that all the roles are placed within the table.
   *
   * @param t a transaction that is currently running.
   */
  public async initRoleTable(t: pgPromise.ITask<{}>): Promise<void> {
    // Create the table
    await t.none(`CREATE TABLE IF NOT EXISTS role (
      id SERIAL PRIMARY KEY,
      name VARCHAR(25) UNIQUE NOT NULL
    );`);

    // Create all the roles specified by roleModel
    await t.batch([
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [
        RoleType.DEFAULT_ADMIN,
        "DEFAULT_ADMIN",
      ]),
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.ADMIN, "ADMIN"]),
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.VET, "VET"]),
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.USER, "USER"]),
    ]);
  }
}
