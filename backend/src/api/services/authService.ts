import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

type HashResponse = {
  hash: string;
  salt: string;
  err: string;
};

type tokenResponse = {
  err?: string;
  content: object | string;
  isValid: boolean;
};

class AuthService {
  /**
   * Number of salt rounds used for hashing.
   */
  private saltRounds: number = 16;

  /**
   * Generates a token string for a user with a payload data.
   *
   * @param payload Data stored within the token.
   * @returns {string} JWT token string.
   */
  signToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
  }

  verifyToken(token: string): tokenResponse {
    try {
      const content = jwt.verify(token, process.env.JWT_SECRET);
      return { content, isValid: true };
    } catch (err) {
      return {
        content: null,
        err,
        isValid: false,
      };
    }
  }

  /**
   * Async function that given a password create a hash and salt.
   *
   * @param password The password to be hashed.
   * @returns {Promise<HashResponse>} The Promise of a hash and salt.
   */
  async hashPassword(password: string): Promise<HashResponse> {
    try {
      const salt = await bcrypt.genSalt(this.saltRounds);
      const hashedPass = await bcrypt.hash(password, salt);
      return {
        hash: hashedPass,
        salt,
        err: null,
      };
    } catch (e) {
      return {
        hash: null,
        salt: null,
        err: e,
      };
    }
  }

  /**
   * Given a plain password and a hash compare asynchronously.
   *
   * @param plainPassword The plain text password inputted
   * @param hashedPass The user hash
   * @returns true if the password was used to create the hash. Otherwise false.
   */
  async verifyPassword(plainPassword: string, hashedPass: string): Promise<boolean> {
    try {
      const response: boolean = await bcrypt.compare(plainPassword, hashedPass);

      // This is to avoid any null or undefined values.
      if (!response) return false;
      return response;

      // For any errors that could be thrown
    } catch (e) {
      return false;
    }
  }

  /**
   * Generates a uuid string
   *
   * @returns uuid string.
   */
  async generateUuid(): Promise<string> {
    return uuidv4();
  }
}

export = AuthService;
