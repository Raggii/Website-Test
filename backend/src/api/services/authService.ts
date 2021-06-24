import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";

type HashResponse = {
  hash: string;
  salt: string;
  err: string;
};

class AuthService {
  //
  private secret: string = process.env.JWT_SECRET;
  private saltRounds: number = 16;

  //
  sign(payload: object): string | null {
    return jwt.sign(payload, this.secret);
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
}

export = AuthService;
