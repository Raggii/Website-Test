import pgPromise from "pg-promise";
import dotEnv from "dotenv";
import { exit } from "process";
import { RoleDAO } from "../api/models/DAOs/roleDAO";
import { UserDAO } from "../api/models/DAOs/userDAO";

dotEnv.config();

type DbConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  max: number;
};

/**
 * Connection configuration
 */
const conf: DbConfig = {
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBNAME,
  max: Number.parseInt(process.env.DB_MAXCONN, 10),
};

// Initiating the pgp
const pgp = pgPromise({});
// Connect to the database
const conn = pgp(conf);

export function disconnectDatabase() {
  conn.$pool.end();
}

/**
 * Initiates the database with all tables
 */
export async function initDatabase() {
  // Try to create any missing tables
  conn
    .tx(async (t: pgPromise.ITask<{}>) => {
      // If we are on a local machine, we want to wipe the database.
      if (process.env.NODE_ENV === "local") {
        await t.none(`DROP TABLE IF EXISTS role, accounts;`);
      }

      // initiate tables
      await RoleDAO.Instance.initRoleTable(t);
      await UserDAO.Instance.initUserTable(t);
      return;
    })
    .catch((e) => {
      console.log("Database initiation went wrong...\n\n");
      console.error(e);
      exit(1);
    });
}

export default conn;
