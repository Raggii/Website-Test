import Axios from "axios";

const SERVER_URL = process.env.SERVER_URL;

const instance = Axios.create({
  baseURL: SERVER_URL,
  timeout: 3000,
});

const endpoints = {
  // Login user
  signIn: (username, password) => instance.post("/login", { username, password }),
};

export default endpoints;
