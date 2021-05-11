/**
 * Singlton class used as the primary access point to the database.
 */
export class DatabaseHandler {
  /**
   * Contains the instance.
   */
  private static _instance: DatabaseHandler;

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
}
