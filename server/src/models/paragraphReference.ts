import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Paragraph from "./paragraph";
import Reference from "./reference";

const ParagraphReference = sequelize.define(
  "ParagraphReference",
  {
    ParagraphId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Paragraph, // References the Paragraph model
        key: "id",
      },
      onDelete: "CASCADE", // Optional: Ensures cascading delete
    },
    ReferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Reference, // References the Reference model
        key: "id",
      },
      onDelete: "CASCADE", // Optional: Ensures cascading delete
    },
  },
  {
    timestamps: false, // Disable timestamps if not needed
  }
);

Paragraph.belongsToMany(Reference, { through: ParagraphReference });
Reference.belongsToMany(Paragraph, { through: ParagraphReference });

export default ParagraphReference;
