import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Language = sequelize.define("Language", {
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false, unique: true },
});

export default Language;
