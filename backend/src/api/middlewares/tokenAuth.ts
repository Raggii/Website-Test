import AuthService from "../services/authService";
import { NextFunction, Request, Response } from "express";

const authService = new AuthService();

export function authenticateAccessToken(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (header) {
    const headerVals = header.split(" ");
    const token = headerVals[headerVals.length - 1];

    const responseToken = authService.verifyToken(token);

    if (!responseToken.isValid) {
      console.error(responseToken.err);
      return res.sendStatus(403);
    } else {
      req.body.tokData = responseToken.content;
      next();
    }
  } else {
    return res.sendStatus(401);
  }
}
