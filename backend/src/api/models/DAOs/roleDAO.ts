import dbHandler from "../../../config/dbConfig.js";

export class RoleDAO {
  private static _instance: RoleDAO = null;
  private conn = dbHandler.Instance.getConn();

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
}
