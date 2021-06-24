import AuthService from "../services/authService";
import { isNewUserValid } from "../validations/userValidation";
import { UserDAO } from "./DAOs/userDAO";

export type User = {
  userId?: number;
  username: string;
  fname: string;
  lname: string;
  email: string;
  hash: string;
  salt: string;
  created_on?: Date;
  role_id?: number;
};

export type NewUser = {
  username: string;
  fname: string;
  lname: string;
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
  private userDaoInstance: UserDAO = UserDAO.Instance;
  /**
   * Authentication service is instantiated by the model for authentication.
   */
  private auth: AuthService = new AuthService();

  /**
   * Determines if a username is unique within the database.
   *
   * @param username Username we want to check if it is unique.
   */
  public async isUsernameUnique(username: string): Promise<boolean> {
    try {
      const results: string[] = await this.userDaoInstance.findUsersByUsername(username);
      return !(results.length > 0);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * Given a user object we add it to the data base. Also performing sanatizations beforehand
   *
   * @param user A new user that we want to add.
   * @returns The user's ID.
   */
  public async addNewUser(newUser: NewUser): Promise<number> {
    // This is not really necessary, as functions providing newUser will probably
    // Sanatise the input anyway.
    if (!isNewUserValid(newUser)) return null;

    // We need to hash the password
    const { hash, salt, err } = await this.auth.hashPassword(newUser.password);

    // If there is an error we throw it
    if (err) throw new Error(err);

    // We create a user obj and try to add it to the database.
    const user: User = {
      hash,
      salt,
      username: newUser.username,
      email: newUser.email,
      fname: newUser.fname,
      lname: newUser.lname,
    };
    try {
      const userId = await this.userDaoInstance.AddUser(user);

      // We throw an error if the user id is null.
      if (userId === null) throw new Error("Something went wrong trying to add user.");

      return userId;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  getAllUsers() {
    return this.userDaoInstance.getAllUsers();
  }
}
