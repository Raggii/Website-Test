import { UserModel } from "../models/usersModel";
import AuthHandler from "../services/authService";

const authHandler = AuthHandler.Instance;
const usersModel = UserModel.Instance;

module.exports = {
  register: (req: any, res: any) => {
    // Ensuring that we have the username and password
    if (req.body.username === null && req.body.password === null) {
      res.status(400).json({
        message: "Username or password are missing.",
      });
      return;
    }

    // Ensure that the username is unique
    if (!usersModel.isUsernameUnique(req.body.username)) {
      res.status(409).json({
        message: "Username is not unique.",
      });
      return;
    }

    // Attempt to add the user data to the database
    let userId: null | string = null;
    try {
      userId = usersModel.addNewUser(req.body.username, req.body.password);
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong trying to sign you up.",
      });
      return;
    }

    // Create JWT Token
    const jwtToken = authHandler.sign({ userId });

    // Success response
    res.status(201).json({
      message: "User has been successfully.",
      tok: jwtToken,
    });
  },
};
