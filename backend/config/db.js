import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

//this sql function we export is used as a tagged template literal , which allows us to write SQL queries in a more readable way

// postgresql://neondb_owner:npg_MHbw8y0qgshN@ep-snowy-frost-a8zcecbr-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
