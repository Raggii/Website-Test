/**
 * Singlton class used as the primary access point to the database.
 */
export class userDAO {
  /**
   * Contains the instance.
   */
  private static _instance: userDAO;

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
}
