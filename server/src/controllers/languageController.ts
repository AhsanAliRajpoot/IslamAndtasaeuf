import { Request, Response } from "express";
import { Language } from "../models";

export const getLanguages = async (req: Request, res: Response) => {
  try {
    const languages = await Language.findAll();
    res.status(200).json(languages);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const createLanguage = async (req: Request, res: Response) => {
  try {
    const language = await Language.create(req.body);
    res.status(201).json(language);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const updateLanguage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Language.update(req.body, { where: { id } });
    if (updated) {
      const updatedLanguage = await Language.findByPk(id);
      res.status(200).json(updatedLanguage);
    } else {
      res.status(404).send("Language not found");
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};

export const deleteLanguage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Language.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send("Language not found");
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};
