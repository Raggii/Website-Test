import { UserModel } from "../models/userModel";
import AuthService from "../services/authService";
import { Result, ValidationError, validationResult } from "express-validator";
import { Request, Response } from "express";
import { RoleModel } from "../models/roleModel";

const authService = new AuthService();
const userModel = new UserModel();
const roleModel = new RoleModel();

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

  // Verify registeration token
  if (!(await userModel.isValidRegisterToken(req.params.registerToken))) {
    return res.status(403).json({ message: "Register token is invalid" });
  }

  // Ensure that the username is unique
  if (!(await userModel.isUsernameUnique(req.body.username))) {
    return res.status(409).json({
      message: "Username is not unique.",
    });
  }

  // Attempt to add the user data to the database
  await userModel
    .addNewUser(req.body, req.params.registerToken)
    .then(({ userId, role }) => {
      // If we don't have the user id this should have failed.
      if (userId === null) throw new Error("userId === null");

      // Create JWT Token
      const jwtToken = authService.signToken({ userId, role });
      console.info(`New user with id ${userId} has a jwt token.`);

      // Success response
      return res
        .status(201)
        .cookie(process.env.JWT_COOKIE_NAME, jwtToken, { maxAge: 604800000, httpOnly: false })
        .json({
          message: "User has been successfully.",
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
    const response = await userModel.isUserValid(username, password);

    // If the user is valid we return a token
    if (!response.err) {
      // Generate the JWT token for authenticated requests.
      const jwtToken = authService.signToken({
        userId: response.data.userId,
        role: response.data.role,
      });

      return res
        .status(200)
        .cookie(process.env.JWT_COOKIE_NAME, jwtToken, { maxAge: 604800000, httpOnly: false })
        .json({ message: "Successfully authenticated!" });
    } else {
      return res.status(400).json({ message: "Password or username is invalid." });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong when logging in..." });
  }
};

const createRegisterToken = async (req: Request, res: Response) => {
  // Verify the user has permission.
  if (
    !(await roleModel.isDefaultAdmin((await userModel.getUser(req.body.tokData.userId)).role_id))
  ) {
    return res.status(403).json({ message: "You lack permission to perform this action" });
  }

  // generate and return the token
  userModel
    .generateRegisterToken()
    .then((regToken) => {
      // If the reg token does not correctly generate
      if (!regToken) throw new Error();

      return res.status(200).json({ tok: regToken });
    })
    .catch((e) => {
      console.error(e);
      return res.status(500).json({ err: "Something went wrong..." });
    });
};

const user = (req: Request, res: Response) => {
  // Requested id
  let requestedId: number;
  try {
    requestedId = Number.parseInt(req.params.id, 10);
  } catch (e) {
    return res.status(400).json({ message: "Parameter Id must be an integer" });
  }

  // If we don't have access to the request id (not ours) return a 403
  if (requestedId !== req.body.tokData.userId) {
    console.error(
      `User with id ${req.body.tokData.userId} tried to access user with id ${requestedId}`
    );
    return res.sendStatus(403);
  }

  // Return the requested userId's user
  userModel
    .getUser(requestedId)
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((e) => {
      console.error(e);
      return res.status(500).json({ err: "Something went wrong..." });
    });
};

export default {
  register,
  login,
  createRegisterToken,
  user,
};
