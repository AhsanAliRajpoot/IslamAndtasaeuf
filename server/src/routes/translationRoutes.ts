import { Router } from "express";
import {
  getTranslations,
  getTranslationById,
  createTranslation,
  updateTranslation,
  deleteTranslation,
} from "../controllers/translationControllers";

const router = Router();

router.get("/", getTranslations);
router.get("/:id", getTranslationById);
router.post("/", createTranslation);
router.put("/:id", updateTranslation);
router.delete("/:id", deleteTranslation);

export default router;
