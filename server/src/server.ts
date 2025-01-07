import app from "./app";
import { sequelize } from "./models";

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to sync database:", error);
  });
