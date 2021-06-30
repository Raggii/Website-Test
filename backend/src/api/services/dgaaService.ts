import { UserDAO } from "../models/DAOs/userDAO";
import { setInterval } from "timers";
import { User } from "../models/userModel";
import AuthService from "./authService";
import { RoleType } from "../models/roleModel";
import { exit } from "process";

const authService = new AuthService();
const DGAA_SERVICE_DELAY_MS = 1000 * 60 * 5;

export async function startDgaaService(): Promise<void> {
  setInterval(() => {
    try {
      dgaaService();
    } catch (e) {
      console.error(e);
    }
  }, DGAA_SERVICE_DELAY_MS);
}

export async function dgaaService(): Promise<void> {
  try {
    if (!(await UserDAO.Instance.defaultAdminExists())) {
      const { hash, salt, err } = await authService.hashPassword(process.env.DGAA_PASSWORD);

      if (err) {
        throw Error("DGAA could not be created");
      }

      const adminUser: User = {
        username: process.env.DGAA_USERNAME,
        email: process.env.DGAA_EMAIL,
        hash,
        salt,
        role_id: RoleType.DEFAULT_ADMIN,
      };
      await UserDAO.Instance.createDefaultAdmin(adminUser);
      console.log("DGAA CREATED...");
    } else {
      console.log("DGAA Exists...");
    }
  } catch (e) {
    console.error("SOMETHING WENT WRONG...");
    exit(1);
  }
}
