import Axios from "axios";

const serverUrl = process.env.REACT_APP_API_URL;

const instance = Axios.create({
  baseURL: serverUrl,
  timeout: 5000,
});

const endpoints = {
  // Login user
  signIn: (username, password) =>
    instance.post("/api/users/login", { username, password }, { withCredentials: true }),
  // get users
  getUsers: async () => {
    return [
      {
        fname: "Jon",
        lname: "Sena",
        email: "MrSena@yahoo.com",
      },
      {
        fname: "James",
        lname: "Smitt",
        email: "Yahoo@Smitt.co.jp",
      },
      {
        fname: "Smitt",
        lname: "Semaj",
        email: "JpCoSmitt@Gmail.ping",
      },
      {
        fname: "Firister",
        lname: "Lastern",
        email: "FirstName@thinkingForNames.co.nz",
      },
      {
        fname: "Brock",
        lname: "The Rock",
        email: "TheRock.Com@bing.co.nz",
      },
    ];
  },
  // register
  register: (username, password, email, fname, lname, token) =>
    instance.post(
      `/api/users/register/${token}`,
      { username, password, email, fname, lname },
      { withCredentials: true }
    ),

  // Get register token
  getRegisterToken: async () =>
    instance.get(`/api/users/createRegisterToken`, { withCredentials: true }),
};

export default endpoints;
