import { Router } from "express";
import {
  getChaptersByBookId,
  getChapterById,
  createChapter,
  updateChapter,
  deleteChapter,
  getAllChapters,
  getChapterByBookAndChapterId,
} from "../controllers/chapterController";

const router = Router();

router.get("/:bookId", getChaptersByBookId);
router.get("/books/:bookId/chapters/:chapterId", getChapterByBookAndChapterId);
router.get("/:id", getChapterById);
router.get("/getAllChapters", getAllChapters);
router.post("/", createChapter);
router.put("/:id", updateChapter);
router.delete("/:id", deleteChapter);
//router.get("/:bookId", getChaptersByBookId);

export default router;
