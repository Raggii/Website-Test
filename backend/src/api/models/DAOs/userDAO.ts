import { User } from "../userModel";
import db from "../../../config/dbConfig.js";
import pgPromise from "pg-promise";
import { RoleType } from "./roleDAO";

/**
 * Singlton class used as the primary access point to the database for negotiating with the user table.
 */
export class UserDAO {
  /**
   * Contains the instance.
   */
  private static _instance: UserDAO = null;
  private conn = db;

  /**
   * Returns the Singlton instance, if it is not defined create a new one.
   */
  public static get Instance(): UserDAO {
    // if the instance has not yet been instantiated, we instantiate it.
    if (this._instance === null) {
      this._instance = new this();
    }

    // Return the instance
    return this._instance;
  }

  private constructor() {}

  async initUserTable(t: pgPromise.ITask<{}>): Promise<void> {
    await t.none(`CREATE TABLE IF NOT EXISTS accounts (
      id serial PRIMARY KEY,
      username VARCHAR(40) UNIQUE NOT NULL,
      fname varchar(50),
      lname varchar(50),
      email varchar(40) UNIQUE NOT NULL,
      hash varchar(72) NOT NULL,
      salt varchar(72) NOT NULL,
      created_on timestamp(6) DEFAULT current_timestamp,
      role_id INT NOT NULL,
      FOREIGN KEY (role_id) REFERENCES role (id)
    );`);
  }

  /**
   * Checks if the default admin account exists in the database.
   *
   * @returns {Promise<boolean>} if exists return true. Otherwise false.
   */
  async defaultAdminExists(): Promise<boolean> {
    const dgaaUser = await this.conn.oneOrNone(
      `SELECT * FROM ACCOUNTS WHERE role_id = $1;`,
      RoleType.DEFAULT_ADMIN
    );
    return dgaaUser !== null && dgaaUser !== undefined;
  }

  /**
   * Creates the default admin account for the database
   */
  async createDefaultAdmin(user: User): Promise<void> {
    await this.conn.none(
      `INSERT INTO accounts (username, email, hash, salt, role_id) VALUES ($1, $2, $3, $4, $5);`,
      [user.username, user.email, user.hash, user.salt, user.role_id]
    );
  }

  /**
   * Given some string the find a list of all users that have this username.
   *
   * @param username Some username to get the list of.
   * @returns {Promise<User>} Returns a list of all users that match this username.
   */
  async getUserByUsername(username: string): Promise<User> {
    return await this.conn.oneOrNone(`SELECT * FROM accounts WHERE username = $1;`, username);
  }

  /**
   * Given a User object attempt to add it to the database.
   * @param user
   */
  async AddUser(user: User): Promise<number> {
    return await this.conn.one(
      `INSERT INTO accounts (username, fname, lname, email, hash, salt, role_id)
        values ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id;`,
      [user.username, user.fname, user.lname, user.email, user.hash, user.salt, user.role_id]
    );
  }

  /**
   * Returns a user with a given user id.
   *
   * @param userId The user's id
   * @returns {User} the user that has the id given.
   */
  async getUserById(userId: number): Promise<User> {
    return await this.conn.oneOrNone(
      `SELECT *
        FROM accounts
        WHERE id = $1;`,
      userId
    );
  }

  async getAllUsers() {
    return await this.conn.manyOrNone("SELECT * FROM accounts;");
  }
}
