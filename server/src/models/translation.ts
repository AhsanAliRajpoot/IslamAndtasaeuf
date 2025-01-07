// import { DataTypes } from "sequelize";
// import sequelize from "../config/db";
// import Paragraph from "./paragraph";
// import Language from "./language";
// import Author from "./author";

// const Translation = sequelize.define("Translation", {
//   content: { type: DataTypes.TEXT, allowNull: false },
// });

// Paragraph.hasMany(Translation, { onDelete: "CASCADE" });
// Translation.belongsTo(Paragraph);

// Language.hasMany(Translation);
// Translation.belongsTo(Language);

// Author.hasMany(Translation);
// Translation.belongsTo(Author);

// export default Translation;

import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Paragraph from "./paragraph";
import Language from "./language";
import Author from "./author";

const Translation = sequelize.define("Translation", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define relationships
Paragraph.hasMany(Translation, {
  onDelete: "CASCADE",
  foreignKey: "ParagraphId", // Add a clear foreign key
  as: "Translations", // Alias for association
});
Translation.belongsTo(Paragraph, {
  foreignKey: "ParagraphId",
  as: "Paragraph",
});

Language.hasMany(Translation, {
  foreignKey: "LanguageId", // Add a clear foreign key
  as: "Translations", // Alias for association
});
Translation.belongsTo(Language, {
  foreignKey: "LanguageId",
  as: "Language",
});

Author.hasMany(Translation, {
  foreignKey: "AuthorId", // Add a clear foreign key
  as: "Translations", // Alias for association
});
Translation.belongsTo(Author, {
  foreignKey: "AuthorId",
  as: "Author",
});

export default Translation;
