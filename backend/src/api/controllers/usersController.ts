import { UserModel } from "../models/userModel";
import AuthService from "../services/authService";
import { isNewUserValid } from "../validations/userValidation";

const authService = new AuthService();
const userModel = new UserModel();

module.exports.register = (req: any, res: any) => {
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
  let userId: null | string = null;
  try {
    userId = userModel.addNewUser(req.body);
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong trying to sign you up.",
    });
    return;
  }

  // Create JWT Token
  const jwtToken = authService.sign({ userId });

  // Success response
  res.status(201).json({
    message: "User has been successfully.",
    tok: jwtToken,
  });
};
