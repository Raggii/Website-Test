import pgPromise from "pg-promise";
import dotEnv from "dotenv";
import { exit } from "process";
import pg from "pg-promise/typescript/pg-subset";
import { RoleType } from "../api/models/roleModel";

/**
 * A singleton that provides an access point to make request to the database
 */
class DatabaseHandler {
  private static instance: DatabaseHandler = null;
  private conn: pgPromise.IDatabase<{}, pg.IClient>;

  /**
   * Provides singlton access to the instance of the database configuration
   */
  public static get Instance(): DatabaseHandler {
    if (this.instance === null) {
      this.instance = new this();
    }

    return this.instance;
  }

  private constructor() {
    // If the environment variables are not already loaded we should do it.
    dotEnv.config();

    // Initiate pgp service
    const pgp = pgPromise({});

    // connect to the database & store the connection
    this.conn = pgp({
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT, 10),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DBNAME,
      max: Number.parseInt(process.env.DB_MAXCONN, 10),
    });
  }

  public getConn(): pgPromise.IDatabase<{}, pg.IClient> {
    return this.conn;
  }

  /**
   * Disconnects from the database (clean-up)
   */
  async disconnectDatabase(): Promise<void> {
    this.conn.$pool.end();
  }

  /**
   * Generates the tables and ensures the database is ready for operations
   */
  async initDatabase(): Promise<void> {
    // Try to create any missing tables
    await this.conn
      .tx(async (t: pgPromise.ITask<{}>) => {
        // If we are on a local machine, we want to wipe the database.
        if (process.env.NODE_ENV === "local") {
          await t.none(`DROP TABLE IF EXISTS role, accounts, sessions;`);
        }

        // initiate tables
        await this.initRoleTable(t);
        await this.initUserTable(t);
        await this.initSessionsTable(t);
        return;
      })
      .catch((e) => {
        console.log("Database initiation went wrong...\n\n");
        console.error(e);
        exit(1);
      });
  }

  /**
   * Initiates the role table, and ensures that all the roles are placed within the table.
   *
   * @param t a transaction that is currently running.
   */
  private async initRoleTable(t: pgPromise.ITask<{}>): Promise<void> {
    // Create the table
    await t.none(`CREATE TABLE IF NOT EXISTS role (
      id SERIAL PRIMARY KEY,
      name VARCHAR(25) UNIQUE NOT NULL
    );`);

    // Create all the roles specified by roleModel
    await t.batch([
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [
        RoleType.DEFAULT_ADMIN,
        "DEFAULT_ADMIN",
      ]),
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.ADMIN, "ADMIN"]),
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.VET, "VET"]),
      t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.USER, "USER"]),
    ]);
  }

  /**
   * Initiates the user table
   *
   * @param t a transaction that is currently running.
   */
  private async initUserTable(t: pgPromise.ITask<{}>): Promise<void> {
    await t.none(`CREATE TABLE IF NOT EXISTS accounts (
      id serial PRIMARY KEY,
      username VARCHAR(40) UNIQUE NOT NULL,
      fname varchar(50),
      lname varchar(50),
      email varchar(40) UNIQUE NOT NULL,
      hash varchar(72) NOT NULL,
      salt varchar(72) NOT NULL,
      created_on timestamp(6) DEFAULT current_timestamp,
      role_id INT NOT NULL,
      FOREIGN KEY (role_id) REFERENCES role (id)
    );`);
  }

  /**
   * Creates a session table that contains session tokens used for creating accounts
   *
   * @param t a transaction that is currently running.
   */
  private async initSessionsTable(t: pgPromise.ITask<{}>): Promise<void> {
    await t.none(`CREATE TABLE IF NOT EXISTS sessions (
      id VARCHAR(64) PRIMARY KEY
    );`);
  }
}

export default DatabaseHandler;
