/**
 *
 */
export class UsersDataAccessObject {
  /**
   *
   */
  private static _instance: UsersDataAccessObject;

  /**
   *
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
   * Determines if a username is unique within the database.
   */
  public isUsernameUnique(username: String) {
    return true;
  }

  /**
   *
   * @param username
   * @param password
   */
  public addNewUser(username: String, password: String) {}
}
