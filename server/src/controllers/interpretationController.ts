import { Request, Response } from "express";
import { Interpretation } from "../models";

// Get all interpretations
export const getInterpretations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const interpretations = await Interpretation.findAll();
    res.status(200).json(interpretations);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};

// Create an interpretation
export const createInterpretation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const interpretation = await Interpretation.create(req.body);
    res.status(201).json(interpretation);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};

// Update an interpretation
export const updateInterpretation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const [updated] = await Interpretation.update(req.body, { where: { id } });
    if (!updated) {
      res.status(404).json({ message: "Interpretation not found." });
      return;
    }
    const interpretation = await Interpretation.findByPk(id);
    res.status(200).json(interpretation);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};

// Delete an interpretation
export const deleteInterpretation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Interpretation.destroy({ where: { id } });
    if (!deleted) {
      res.status(404).json({ message: "Interpretation not found." });
      return;
    }
    res.status(204).send();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};
