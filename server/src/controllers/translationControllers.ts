import { Request, Response } from "express";
import { Translation } from "../models";

export const getTranslations = async (req: Request, res: Response) => {
  try {
    const translations = await Translation.findAll();
    res.status(200).json(translations);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const getTranslationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const translation = await Translation.findByPk(id);
    if (translation) {
      res.status(200).json(translation);
    } else {
      res.status(404).json({ error: "Translation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const createTranslation = async (req: Request, res: Response) => {
  try {
    const translation = await Translation.create(req.body);
    res.status(201).json(translation);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const updateTranslation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Translation.update(req.body, { where: { id } });
    if (updated) {
      const updatedTranslation = await Translation.findByPk(id);
      res.status(200).json(updatedTranslation);
    } else {
      res.status(404).json({ error: "Translation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const deleteTranslation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Translation.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Translation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};
