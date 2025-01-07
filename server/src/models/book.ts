import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Language from "./language";

const Book = sequelize.define("Book", {
  title: { type: DataTypes.STRING, allowNull: false },
  originalLanguageId: {
    type: DataTypes.INTEGER,
    references: { model: Language, key: "id" },
  },
  description: { type: DataTypes.TEXT },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Book;
