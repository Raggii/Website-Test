import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type HashResponse = {
  hash: string;
  salt: string;
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

  async hashPassword(password: string): Promise<HashResponse> {
    bcrypt.genSalt(this.saltRounds).then((salt: string) => {
      bcrypt.hash(password, salt).then((hash) => {
        throw Error("Not implemented"); // TODO RETURN HashResponse!
      });
    });
  }
}

export = AuthService;
