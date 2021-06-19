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
  public constructor() {}

  //
  sign(payload: object, callback?: (arg0: string) => void): string | null {
    const jwtString = jwt.sign(payload, this.secret);

    if (callback !== null) {
      callback(jwtString);
    } else {
      return jwtString;
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
      const hash = await bcrypt.hash(password, salt);
      return {
        hash,
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
   * @param hash The user hash
   * @returns true if the password was used to create the hash. Otherwise false.
   */
  async verifyPassword(plainPassword: string, hash: string): Promise<Boolean> {
    try {
      const response: boolean = await bcrypt.compare(plainPassword, hash);

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
