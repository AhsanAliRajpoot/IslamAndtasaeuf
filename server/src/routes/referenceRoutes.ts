import { Router } from "express";
import {
  getReferences,
  createReference,
  updateReference,
  deleteReference,
} from "../controllers/referenceController";

const router = Router();

router.get("/", getReferences);
router.post("/", createReference);
router.put("/:id", updateReference);
router.delete("/:id", deleteReference);

export default router;
