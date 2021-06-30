import pgPromise from "pg-promise";
import AuthService from "../../services/authService.js";
import db from "../../../config/dbConfig.js";

export class SessionDAO {
  private static _instance: SessionDAO = null;
  private conn = db;
  private auth = new AuthService();

  /**
   * Returns the SessionDAO global instance.
   */
  public static get Instance(): SessionDAO {
    // if the instance has not yet been instantiated, we instantiate it.
    if (this._instance === null) {
      this._instance = new this();
    }

    // Return the instance
    return this._instance;
  }

  private constructor() {}

  /**
   * Creates a session table that contains session tokens used for creating accounts
   *
   * @param t a transaction that is currently running.
   */
  async initSessionsTable(t: pgPromise.ITask<{}>): Promise<void> {
    await t.none(`CREATE TABLE IF NOT EXISTS sessions (
      id VARCHAR(64) PRIMARY KEY
    );`);
  }

  /**
   * Attempts to generate a register token. But may throw an error if the token already exists
   * in the table.
   *
   * @returns {Promise<string>} Token string.
   */
  async generateRegisterToken(): Promise<string> {
    const uuidString = await this.auth.generateUuid();
    const registerToken = await this.conn.one(
      `INSERT INTO sessions (id) VALUES ($1) RETURNING id;`,
      uuidString
    );
    return registerToken.id;
  }

  /**
   * Attempet to consome an access token from the sessions table.
   *
   * @param registerToken to be consumed.
   * @param t transaction executer.
   * @returns true if the register token was successfully consumed otherwise false.
   */
  async consumeRegisterToken(registerToken: string, t?: pgPromise.ITask<{}>): Promise<boolean> {
    // If it is a transaction, use that option
    if (t) {
      return (
        (await t.oneOrNone(`DELETE FROM sessions WHERE id = $1 RETURNING *;`, registerToken)) !==
        null
      );
    }

    return (
      (await this.conn.oneOrNone(
        `DELETE FROM sessions WHERE id = $1 RETURNING *;`,
        registerToken
      )) !== null
    );
  }

  /**
   * Verify that a registration token exists in the database.
   *
   * @param registerToken token to be verified.
   * @returns true if the token exists. Otherwise false.
   */
  async registerTokenExists(registerToken: string): Promise<boolean> {
    return (
      (await this.conn.oneOrNone(`SELECT * FROM sessions WHERE id = $1;`, registerToken)) !== null
    );
  }
}
