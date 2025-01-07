import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Paragraph from "./paragraph";

export const Interpretation = sequelize.define("Interpretation", {
  content: { type: DataTypes.TEXT, allowNull: false },
});

Paragraph.hasMany(Interpretation);
Interpretation.belongsTo(Paragraph);

export default Interpretation;
