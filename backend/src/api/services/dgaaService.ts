import { UserDAO } from "../models/DAOs/userDAO";
import { setInterval } from "timers";
import { User } from "../models/userModel";
import AuthService from "./authService";

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
      };
      UserDAO.Instance.createDefaultAdmin(adminUser);
    }
  } catch (e) {
    console.error(e);
  }
}
