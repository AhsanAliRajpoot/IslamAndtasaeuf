import sequelize from "../config/db";
import Language from "./language";
import Author from "./author";
import Book from "./book";
import Chapter from "./chapter";
import Paragraph from "./paragraph";
import Translation from "./translation";
import Interpretation from "./interpretation";
import Reference from "./reference";
import ParagraphReference from "./paragraphReference";

export {
  sequelize,
  Language,
  Author,
  Book,
  Chapter,
  Paragraph,
  Translation,
  Interpretation,
  Reference,
  ParagraphReference,
};
