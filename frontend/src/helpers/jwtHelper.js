import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export const getCookieData = () => {
  return jwt.decode(Cookies.get("chronousTheThirdEyedMonster"));
};
