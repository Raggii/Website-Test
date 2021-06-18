import jwt from "jsonwebtoken";

class AuthHandler {
  //
  private static _instance: AuthHandler;
  //
  private secret = process.env.JWT_SECRET;

  //
  private constructor() {}

  public static get Instance() {
    if (this._instance === null) {
      this._instance = new this();
    }

    return this._instance;
  }

  //
  sign(payload: object, callback?: (arg0: string) => void): string | null {
    const jwtString = jwt.sign(payload, this.secret);

    if (callback !== null) {
      callback(jwtString);
    } else {
      return jwtString;
    }
  }
}

export = AuthHandler;
