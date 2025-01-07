import { Request, Response } from "express";
import { Paragraph, Reference, ParagraphReference } from "../models";

// export const getParagraphs = async (req: Request, res: Response) => {
//   try {
//     const paragraphs = await Paragraph.findAll();
//     res.status(200).json(paragraphs);
//   } catch (error) {
//     res.status(500).json({
//       error: error instanceof Error ? error.message : "Unknown error",
//     });
//   }
// };

export const getParagraphs = async (req: Request, res: Response) => {
  try {
    const paragraphs = await Paragraph.findAll({
      order: [["id", "ASC"]],
      include: [
        {
          model: Reference,
          as: "References",
          attributes: ["id", "referenceType", "referenceDetail"],
          order: [["id", "ASC"]],
        },
      ],
    });
    res.status(200).json(paragraphs);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getParagraphById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const paragraph = await Paragraph.findByPk(id, {
      include: [
        {
          model: Reference,
          as: "References",
          attributes: ["id", "referenceType", "referenceDetail"],
        },
      ],
    });
    if (paragraph) {
      res.status(200).json(paragraph);
    } else {
      res.status(404).json({ error: "Paragraph not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const createParagraph = async (req: Request, res: Response) => {
  try {
    const paragraph = await Paragraph.create(req.body);
    res.status(201).json(paragraph);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateParagraph = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Paragraph.update(req.body, { where: { id } });
    if (updated) {
      const updatedParagraph = await Paragraph.findByPk(id);
      res.status(200).json(updatedParagraph);
    } else {
      res.status(404).json({ error: "Paragraph not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteParagraph = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Paragraph.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Paragraph not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
