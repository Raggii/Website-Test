/**
 *
 */
export class UserModel {
  /**
   *
   */
  private static _instance: UserModel;

  /**
   *
   */
  public static get Instance(): UserModel {
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
  public isUsernameUnique(username: string): boolean {
    return true;
  }

  /**
   *
   * @param username
   * @param password
   * @returns
   */
  public addNewUser(username: string, password: string): string {
    const userId = "RANDOM_ID_STRING_ASDASD";
    return userId;
  }
}
