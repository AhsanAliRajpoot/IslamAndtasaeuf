import { Router } from "express";
import {
  getLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
} from "../controllers/languageController";

const router = Router();

router.get("/", getLanguages);
router.post("/", createLanguage);
router.put("/:id", updateLanguage);
router.delete("/:id", deleteLanguage);

export default router;
