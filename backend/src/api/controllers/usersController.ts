import { UserModel } from "../models/userModel";
import AuthService from "../services/authService";
import { body, Result, ValidationError, validationResult } from "express-validator";
import { Request, Response } from "express";

const authService = new AuthService();
const userModel = new UserModel();

/**
 * Performs the registration steps when attempting to add a new user.
 */
const register = async (req: Request, res: Response) => {
  // Ensuring that we have the correct elements
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    console.error(errors);
    return res.status(400).json({
      message: "Some user data is missing.",
    });
  }

  // Ensure that the username is unique
  if (!userModel.isUsernameUnique(req.body.username)) {
    return res.status(409).json({
      message: "Username is not unique.",
    });
  }

  // Attempt to add the user data to the database
  await userModel
    .addNewUser(req.body)
    .then((userId: number) => {
      // If we don't have the user id this should have failed.
      if (userId === null) throw new Error();

      // Create JWT Token
      const jwtToken = authService.signToken({ userId });

      // Success response
      return res.status(201).json({
        message: "User has been successfully.",
        tok: jwtToken,
      });
    })
    .catch((e) => {
      console.error(e);
      return res.status(500).json({
        message: "Something went wrong trying to sign you up.",
      });
    });
};

const login = async (req: Request, res: Response) => {
  try {
    // Ensuring that we have the correct elements
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors);
      return res.status(400).json({
        message: "Some user data is missing.",
      });
    }

    const { username, password } = req.body;

    // Check that the user is valid
    const response: { err: string; userId: number } = await userModel.isUserValid(
      username,
      password
    );

    // If the user is valid we return a token
    if (!response.err) {
      // Generate the JWT token for authenticated requests.
      const jwtToken = authService.signToken({ userId: response.userId });

      return res.status(200).json({ message: "Successfully authenticated!", tok: jwtToken });
    } else {
      console.error(response.err);
      return res.status(400).json({ message: "Password or username is invalid." });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong when logging in..." });
  }
};

const users = (req: Request, res: Response) => {
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
      console.error(e);
      res.status(500).json({ err: "Something went wrong..." });
    });
};

export default {
  register,
  login,
  users,
  user,
};
