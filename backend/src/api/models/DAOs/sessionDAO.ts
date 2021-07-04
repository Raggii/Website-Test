import pgPromise from "pg-promise";
import AuthService from "../../services/authService.js";
import dbHandler from "../../../config/dbConfig.js";

export class SessionDAO {
  private static _instance: SessionDAO = null;
  private conn = dbHandler.Instance.getConn();
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
   * Attempts to generate a register token. But may throw an error if the token already exists
   * in the table.
   *
   * @param registerTokenString contains the session id string
   * @param sessionType contains the session type string
   * @returns {Promise<string>} Token id string.
   */
  async AddSessionToken(
    registerTokenString: string,
    sessionType: string,
    userId: number
  ): Promise<string> {
    const registerToken = await this.conn.one(
      `INSERT INTO sessions (id, type, user_id) VALUES ($1, $2, $3) RETURNING id;`,
      [registerTokenString, sessionType, userId]
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
        (await t.oneOrNone(
          `DELETE FROM sessions WHERE id = $1 AND type = 'register' RETURNING *;`,
          registerToken
        )) !== null
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
      (await this.conn.oneOrNone(
        `SELECT * FROM sessions WHERE id = $1 AND type = 'register';`,
        registerToken
      )) !== null
    );
  }

  /**
   * Verifys if a session exists within the session table
   *
   * @param sessionString The session id
   * @returns true and userId if it exists, Otherwise false and null.
   */
  async loginTokenExists(
    sessionString: string
  ): Promise<{ isValid: boolean; userId: number | null }> {
    const res = await this.conn.oneOrNone(
      `SELECT * FROM sessions WHERE id = $1 AND type = 'login';`,
      sessionString
    );

    if (res !== null && res !== undefined) {
      return { isValid: true, userId: res.user_id };
    } else {
      return { isValid: false, userId: null };
    }
  }
}
