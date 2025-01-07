// import { DataTypes } from "sequelize";
// import sequelize from "../config/db";
// import Chapter from "./chapter";

// export const Paragraph = sequelize.define("Paragraph", {
//   content: { type: DataTypes.TEXT, allowNull: false },
//   audioUrl: { type: DataTypes.STRING },
// });

// Chapter.hasMany(Paragraph);
// Paragraph.belongsTo(Chapter);

// export default Paragraph;

import {
  DataTypes,
  Model,
  Optional,
  BelongsToManyAddAssociationMixin,
  BelongsToManyGetAssociationsMixin,
} from "sequelize";
import sequelize from "../config/db";
import Chapter from "./chapter";
import Reference from "./reference";
import Translation from "./translation";
import ParagraphReference from "./paragraphReference";

// Define the attributes of the Paragraph model
interface ParagraphAttributes {
  id: number;
  content: string;
  audioUrl?: string;
  ChapterId: number;
  paragraphNumber: number;
}

// Define the creation attributes (e.g., id might not be present when creating)
interface ParagraphCreationAttributes
  extends Optional<ParagraphAttributes, "id"> {}

// Extend Sequelize's Model
class Paragraph
  extends Model<ParagraphAttributes, ParagraphCreationAttributes>
  implements ParagraphAttributes
{
  public id!: number;
  public content!: string;
  public audioUrl?: string;
  public ChapterId!: number;
  public paragraphNumber!: number;

  // Association methods for references
  public addReference!: BelongsToManyAddAssociationMixin<Reference, number>;
  public getReferences!: BelongsToManyGetAssociationsMixin<Reference>;
}

Paragraph.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    audioUrl: {
      type: DataTypes.STRING,
    },
    ChapterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paragraphNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Paragraph",
  }
);

// Define relationships
Chapter.hasMany(Paragraph, {
  foreignKey: "ChapterId", // Ensure the foreign key matches the column in the Paragraph model
});
Paragraph.belongsTo(Chapter);
// Paragraph.hasMany(Translation, { as: "Translations" });

export default Paragraph;
