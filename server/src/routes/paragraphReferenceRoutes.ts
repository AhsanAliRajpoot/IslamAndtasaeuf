import { Router } from "express";
import {
  createParagraphWithReferences,
  getParagraphsWithReferences,
  getParagraphWithReferencesById,
} from "../controllers/paragraphReferenceController";

const router = Router();

router.post("/", createParagraphWithReferences);
router.get("/", getParagraphsWithReferences);
//router.get("/:id", getParagraphWithReferencesById);
// router.post("/", createParagraph);
// router.put("/:id", updateParagraph);
// router.delete("/:id", deleteParagraph);

export default router;
