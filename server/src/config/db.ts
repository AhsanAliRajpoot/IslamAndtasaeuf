import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

// Load environment variables
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_NAME || !DB_HOST || !DB_PORT) {
  throw new Error("Missing database configuration in environment variables.");
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "postgres",
  logging: false,
});

export default sequelize;
