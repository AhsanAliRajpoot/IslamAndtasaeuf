import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import Paragraph from "./paragraph";
import ParagraphReference from "./paragraphReference";

// Define the attributes of the Reference model
interface ReferenceAttributes {
  id: number;
  referenceType: string;
  referenceDetail: string;
}

// Define the creation attributes (e.g., `id` might not be present when creating)
interface ReferenceCreationAttributes
  extends Optional<ReferenceAttributes, "id"> {}

// Extend Sequelize's Model
class Reference
  extends Model<ReferenceAttributes, ReferenceCreationAttributes>
  implements ReferenceAttributes
{
  public id!: number;
  public referenceType!: string;
  public referenceDetail!: string;
}

Reference.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    referenceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    referenceDetail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Reference",
  }
);

export default Reference;
