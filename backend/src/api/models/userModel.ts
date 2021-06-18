import { userDAO } from "./DAOs/userDAO";

export type User = {
  userId?: number;
  username: string;
  email: string;
  hash: string;
  salt: string;
};

export type NewUser = {
  username: string;
  email: string;
  password: string;
};

/**
 * handles data logic for the User model
 */
export class UserModel {
  /**
   * Stores the instance of the user Data Access Object to interact with the database.
   * This will also be lazily instantiated with the userModel.
   */
  private userDaoInstance: userDAO;

  /**
   * Creates the UserModel class instance.
   */
  public constructor() {
    this.userDaoInstance = userDAO.Instance;
  }

  /**
   * Determines if a username is unique within the database.
   *
   * @param username Username we want to check if it is unique.
   */
  public isUsernameUnique(username: string): boolean {
    let results: string[] = this.userDaoInstance.findUsersByUsername(username);
    return !(results.length > 0);
  }

  /**
   * Given a user object we add it to the data base. Also performing sanatizations beforehand
   *
   * @param user A new user that we want to add.
   * @returns The user's ID.
   */
  public addNewUser(newUser: NewUser): string | null {
    const userId = "RANDOM_ID_STRING_ASDASD";
    return userId;
  }
}
