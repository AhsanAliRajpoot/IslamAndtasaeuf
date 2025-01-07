import { Request, Response } from "express";
import {
  Chapter,
  Paragraph,
  Reference,
  Translation,
  Language,
} from "../models";

export const getChaptersByBookId = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const chapters = await Chapter.findAll({
      where: { BookId: bookId },
      include: [
        {
          model: Paragraph,
          include: [
            {
              model: Reference,
              as: "References",
              attributes: ["id", "referenceType", "referenceDetail"],
            },
            {
              model: Translation,
              as: "Translations",
              attributes: ["id", "ParagraphId", "content"],
              include: [
                {
                  model: Language,
                  as: "Language", // Ensure this matches the alias in your model
                  attributes: ["id", "name"], // Adjust fields as needed
                },
              ],
            },
          ],
        },
      ],
      order: [["chapterNumber", "ASC"]],
    });

    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getChapterByBookAndChapterId = async (
  req: Request,
  res: Response
) => {
  try {
    const { bookId, chapterId } = req.params;
    const chapters = await Chapter.findAll({
      where: { BookId: bookId, id: chapterId },
      include: [
        {
          model: Paragraph,
          include: [
            {
              model: Reference,
              as: "References",
              attributes: ["id", "referenceType", "referenceDetail"],
            },
            {
              model: Translation,
              as: "Translations",
              attributes: ["id", "ParagraphId", "content"],
              include: [
                {
                  model: Language,
                  as: "Language", // Ensure this matches the alias in your model
                  attributes: ["id", "name"], // Adjust fields as needed
                },
              ],
            },
          ],
        },
      ],
      order: [["chapterNumber", "ASC"]],
    });

    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllChapters = async (req: Request, res: Response) => {
  try {
    const chapters = await Chapter.findAll({
      include: [Paragraph],
      order: [["chapterNumber", "ASC"]],
    });
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getChapterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chapter = await Chapter.findByPk(id, { include: [Paragraph] });
    if (chapter) {
      res.status(200).json(chapter);
    } else {
      res.status(404).json({ error: "Chapter not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const createChapter = async (req: Request, res: Response) => {
  try {
    const chapter = await Chapter.create(req.body);
    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Chapter.update(req.body, { where: { id } });
    if (updated) {
      const updatedChapter = await Chapter.findByPk(id);
      res.status(200).json(updatedChapter);
    } else {
      res.status(404).json({ error: "Chapter not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Chapter.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Chapter not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
