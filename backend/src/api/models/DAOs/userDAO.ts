import { User } from "../userModel";
import db from "../../../config/dbConfig.js";

/**
 * Singlton class used as the primary access point to the database.
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
  public static get Instance() {
    // if the instance has not yet been instantiated, we instantiate it.
    if (this._instance === null) {
      this._instance = new this();
    }

    // Return the instance
    return this._instance;
  }

  /**
   *
   */
  private constructor() {}

  /**
   * Given some string the find a list of all users that have this username.
   *
   * @param username Some username to get the list of.
   * @returns {String[]} Returns a list of all users that match this username.
   */
  findUsersByUsername(username: string): string[] {
    throw new Error("Method not implemented.");
  }

  /**
   * Given a User object attempt to add it to the database.
   * @param user
   */
  AddUser(user: User): string | null {
    throw new Error("Method not implemented.");
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.conn
        .query("SELECT * FROM users")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
