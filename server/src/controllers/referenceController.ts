import { Request, Response } from "express";
import { Reference } from "../models";

// Get all references
export const getReferences = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const references = await Reference.findAll();
    res.status(200).json(references);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};

// Create a reference
export const createReference = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reference = await Reference.create(req.body);
    res.status(201).json(reference);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};

// Update a reference
export const updateReference = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const [updated] = await Reference.update(req.body, { where: { id } });
    if (!updated) {
      res.status(404).json({ message: "Reference not found." });
      return;
    }
    const reference = await Reference.findByPk(id);
    res.status(200).json(reference);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};

// Delete a reference
export const deleteReference = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Reference.destroy({ where: { id } });
    if (!deleted) {
      res.status(404).json({ message: "Reference not found." });
      return;
    }
    res.status(204).send();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred.";
    res.status(500).json({ error: message });
  }
};
