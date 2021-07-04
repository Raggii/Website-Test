import Axios from "axios";

const serverUrl = process.env.REACT_APP_API_URL;

const instance = Axios.create({
  baseURL: serverUrl,
  timeout: 5000,
});

const endpoints = {
  // Login user
  signIn: (username, password) => instance.post("/api/users/login", { username, password }),
};

export default endpoints;
