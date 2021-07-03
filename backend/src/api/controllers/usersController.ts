import AuthService from "../services/authService";
import { Result, ValidationError, validationResult } from "express-validator";
import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { RoleModel } from "../models/roleModel";

const authService = new AuthService();
const userModel = new UserModel();
const roleModel = new RoleModel();

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
  user,
};
