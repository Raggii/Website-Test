import { UserModel } from "../models/userModel";
import AuthService from "../services/authService";
import { isNewUserValid } from "../validations/userValidation";
import { Request, Response } from "express";

const authService = new AuthService();
const userModel = new UserModel();

/**
 * Performs the registration steps when attempting to add a new user.
 */
const register = (req: Request, res: Response) => {
  // Ensuring that we have the correct elements // TODO REMOVE VALIDATOR CLASS
  if (!isNewUserValid(req.body)) {
    res.status(400).json({
      message: "Some user data is missing.",
    });
    return;
  }

  // Ensure that the username is unique
  if (!userModel.isUsernameUnique(req.body.username)) {
    res.status(409).json({
      message: "Username is not unique.",
    });
    return;
  }

  // Attempt to add the user data to the database
  userModel
    .addNewUser(req.body)
    .then((userId: number) => {
      // If we don't have the user id this should have failed.
      if (userId === null) throw new Error();

      // Create JWT Token
      const jwtToken = authService.signToken({ userId });

      // Success response
      res.status(201).json({
        message: "User has been successfully.",
        tok: jwtToken,
      });
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({
        message: "Something went wrong trying to sign you up.",
      });
    });
};

const login = (req: Request, res: Response) => {
  // Check that we got the correct data.
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      message: "Username or password are required..",
    });
  }

  // Test that the password is correct.
};

const users = (req: Request, res: Response) => {
  console.error(req.body.tokData);

  userModel
    .getAllUsers()
    .then((results) => {
      res.status(200).json({
        results,
      });
    })
    .catch((e) => {
      res.status(500).json({ err: e });
    });
};

const user = (req: Request, res: Response) => {
  userModel
    .getUser(Number.parseInt(req.params.id, 10))
    .then((results) => {
      res.status(200).json({ results });
    })
    .catch((e) => {
      res.status(500).json({ err: e });
    });
};

export default {
  register,
  login,
  users,
  user,
};
