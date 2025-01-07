import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Book from "./book";

const Chapter = sequelize.define("Chapter", {
  title: { type: DataTypes.STRING, allowNull: false },
  chapterNumber: { type: DataTypes.INTEGER, allowNull: false },
});

Book.hasMany(Chapter, { onDelete: "CASCADE" });
Chapter.belongsTo(Book);

export default Chapter;
