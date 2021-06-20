import pgPromise from "pg-promise";
import dotEnv from "dotenv";

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
export default pgp(conf);
