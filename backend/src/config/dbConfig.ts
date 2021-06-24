import pgPromise from "pg-promise";
import dotEnv from "dotenv";
import { exit } from "process";

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
  // Try to drop all the tables if it is local
  if (process.env.NODE_ENV === "local") {
    try {
      await conn.query(`DROP TABLE IF EXISTS role, accounts;`);
    } catch (e) {
      console.log("SOMETHING WENT WRONG WITH DROPPING TABLES PLEASE REVIEW DATABASE!");
      console.error(e);
      exit(1);
    }
  }

  // Try to create any missing tables
  try {
    // create role table
    await conn.query(`CREATE TABLE IF NOT EXISTS role (
      id SERIAL PRIMARY KEY,
      name VARCHAR(25) UNIQUE NOT NULL
    );`);

    // create user
    await conn.query(`CREATE TABLE IF NOT EXISTS accounts (
      id serial PRIMARY KEY,
      username VARCHAR(40) UNIQUE NOT NULL,
      fname varchar(50),
      lname varchar(50),
      email varchar(40) NOT NULL,
      hash varchar(72) NOT NULL,
      salt varchar(72) NOT NULL,
      created_on timestamp(6),
      role_id INT,
      FOREIGN KEY (role_id) REFERENCES role (id)
    );`);
  } catch (e) {
    console.log("SOMETHING WENT WRONG WITH DROPPING TABLES PLEASE REVIEW DATABASE!");
    console.error(e);
    exit(1);
  }
}

export default conn;
