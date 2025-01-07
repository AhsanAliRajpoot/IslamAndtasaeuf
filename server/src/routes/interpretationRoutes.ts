import { Router } from "express";
import {
  getInterpretations,
  createInterpretation,
  updateInterpretation,
  deleteInterpretation,
} from "../controllers/interpretationController";

const router = Router();

router.get("/", getInterpretations);
router.post("/", createInterpretation);
router.put("/:id", updateInterpretation);
router.delete("/:id", deleteInterpretation);

export default router;
