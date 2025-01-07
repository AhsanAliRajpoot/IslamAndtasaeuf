import { Router } from "express";
import {
  getParagraphs,
  getParagraphById,
  createParagraph,
  updateParagraph,
  deleteParagraph,
} from "../controllers/paragraphControllers";

const router = Router();

router.get("/", getParagraphs);
router.get("/:id", getParagraphById);
router.post("/", createParagraph);
router.put("/:id", updateParagraph);
router.delete("/:id", deleteParagraph);

export default router;
