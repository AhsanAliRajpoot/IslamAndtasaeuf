import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Author = sequelize.define("Author", {
  name: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.TEXT },
});

export default Author;
