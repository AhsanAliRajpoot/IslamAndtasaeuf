import express from "express";
import bodyParser from "body-parser";
import bookRoutes from "./routes/bookRoutes";
import chapterRoutes from "./routes/chapterRoutes";
import authorRoutes from "./routes/authorRoutes";
import paragraphRoutes from "./routes/paragraphRoutes";
import translationRoutes from "./routes/translationRoutes";
import interpretationRoutes from "./routes/interpretationRoutes";
import referenceRoutes from "./routes/referenceRoutes";
import languageRoutes from "./routes/languageRoutes";
import ParagraphWithReferences from "./routes/paragraphReferenceRoutes";
import cors from "cors";

const app = express();

// Define your CORS options if needed
const corsOptions = {
  origin: "*", // Allow all origins; replace with a specific domain for security
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

// Enable CORS
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/books", bookRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/paragraphs", paragraphRoutes);
app.use("/api/translations", translationRoutes);
app.use("/api/interpretations", interpretationRoutes);
app.use("/api/references", referenceRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/ParagraphWithReferences", ParagraphWithReferences);

export default app;
