import AuthService from "../services/authService";
import { isNewUserValid } from "../validations/userValidation";
import { RoleType } from "./roleModel.js";
import { SessionDAO } from "./DAOs/sessionDAO";
import { UserDAO } from "./DAOs/userDAO";
import { getUserResponse } from "./DTOs/userDTO";

export type User = {
  id?: number;
  username: string;
  fname?: string;
  lname?: string;
  email: string;
  hash: string;
  salt: string;
  created_on?: Date;
  role_id: number;
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
   * Stores the instance of the session Data Access Object to interact with the database.
   * This will also be lazily instantiated with the userModel.
   */
  private sessionDaoInstance: SessionDAO = SessionDAO.Instance;

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
      const result: User = await this.userDaoInstance.getUserByUsername(username);
      if (result) {
        return true;
      }
      return false;
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
  public async addNewUser(newUser: NewUser, registerToken: string): Promise<number> {
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
      role_id: RoleType.USER,
    };

    try {
      const userId: number = await this.userDaoInstance.AddNewUser(user, registerToken);

      // We throw an error if the user id is null.
      if (userId === null) throw new Error("Something went wrong trying to add user.");

      return userId;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Given a pair of a user's username and password we verify if it is valid.
   *
   * @param username Attmpt username.
   * @param password Attempt password
   * @returns err contains the error message. isValid defines if the combination is valid.
   */
  async isUserValid(username: string, password: string): Promise<{ err: string; userId: number }> {
    try {
      // Check if the user exists
      const user: User = await this.userDaoInstance.getUserByUsername(username);
      if (!user) {
        return { err: "Username is invalid", userId: null };
      }

      // Check the password
      if (await this.auth.verifyPassword(password, user.hash)) {
        return { err: null, userId: user.id };
      } else {
        return { err: "Password is invalid", userId: null };
      }
    } catch (e) {
      return { err: "SOMETHING", userId: null };
    }
  }

  getAllUsers() {
    return this.userDaoInstance.getAllUsers();
  }

  /**
   * Retrieves the user of a given user id.
   *
   * @param userId userId of the user we want to get information about.
   * @returns {getUserResponse} Formatted response of the user object.
   */
  async getUser(userId: number): Promise<getUserResponse> {
    const user: User = await this.userDaoInstance.getUserById(userId);
    const dtoData: getUserResponse = { ...user };

    return dtoData;
  }

  /**
   * Verifies that a register token is valid.
   *
   * @param registerToken register token to be validated.
   * @returns true if valid. Otherwise false.
   */
  async isValidRegisterToken(registerToken: string): Promise<boolean> {
    return await this.sessionDaoInstance.registerTokenExists(registerToken);
  }

  /**
   * Generates a reigtration token.
   *
   * @returns {Promise<string>} the registration token.
   */
  async generateRegisterToken(): Promise<string> {
    return await this.sessionDaoInstance.generateRegisterToken();
  }
}
