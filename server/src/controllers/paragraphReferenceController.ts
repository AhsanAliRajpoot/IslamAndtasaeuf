// import { Request, Response } from "express";
// import Paragraph from "../models/paragraph"; // Adjust the import based on your directory structure
// import Reference from "../models/reference";

// export const createParagraphWithReferences = async (
//   req: Request,
//   res: Response
// ) => {
//   const { content, audioUrl, ChapterId, references, paragraphNumber } =
//     req.body;

//   try {
//     // Step 1: Insert placeholders for references in content
//     let updatedContent = content;
//     const referencePlaceholders: { placeholder: string; position: number }[] =
//       [];

//     references.forEach((ref: any, index: number) => {
//       const placeholder = `{{ref${index + 1}}}`;
//       referencePlaceholders.push({ placeholder, position: ref.position });
//       updatedContent =
//         updatedContent.slice(0, ref.position) +
//         placeholder +
//         updatedContent.slice(ref.position);
//     });

//     // Step 2: Create paragraph with placeholders in content
//     const paragraph = await Paragraph.create({
//       content: updatedContent,
//       audioUrl,
//       ChapterId,
//       paragraphNumber,
//     });

//     // Step 3: Create references
//     const createdReferences = await Promise.all(
//       references.map((ref: any, index: number) =>
//         Reference.create({
//           referenceType: ref.referenceType,
//           referenceDetail: ref.referenceDetail,
//           position: referencePlaceholders[index].position,
//           ParagraphId: paragraph.id, // Ensure `id` is available
//         })
//       )
//     );

//     // Step 4: Replace placeholders with reference IDs in content
//     createdReferences.forEach((ref, index) => {
//       updatedContent = updatedContent.replace(
//         referencePlaceholders[index].placeholder,
//         `[ref:${ref.id}]`
//       );
//     });

//     // Step 5: Update paragraph with final content
//     await paragraph.update({ content: updatedContent });

//     // Fetch the paragraph with its references to return
//     const paragraphWithReferences = await Paragraph.findByPk(paragraph.id, {
//       include: [Reference],
//     });

//     res.status(201).json(paragraphWithReferences);
//   } catch (error) {
//     console.error("Error creating paragraph with references:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to create paragraph with references." });
//   }
// };

import { Request, Response } from "express";
import Paragraph from "../models/paragraph";
import Reference from "../models/reference";
// import Reference from "../models/reference";

export const createParagraphWithReferences = async (
  req: Request,
  res: Response
) => {
  const { content, audioUrl, ChapterId, references, paragraphNumber } =
    req.body;

  try {
    // Step 1: Create the paragraph
    const paragraph = await Paragraph.create({
      content,
      audioUrl,
      ChapterId,
      paragraphNumber,
    });

    // Step 2: Create references and their association in ParagraphReferences
    const createdReferences = await Promise.all(
      references.map(async (ref: any, index: number) => {
        const createdRef = await Reference.create({
          referenceType: ref.referenceType,
          referenceDetail: ref.referenceDetail,
        });

        // Link the reference to the paragraph via ParagraphReferences
        await paragraph.addReference(createdRef);

        return createdRef;
      })
    );

    // Step 3: Update content with reference IDs
    let updatedContent = content;
    createdReferences.forEach((ref, index) => {
      const placeholder = `[ref:${index + 1}]`;
      updatedContent = updatedContent.replace(placeholder, `[ref:${ref.id}]`);
    });

    // Step 4: Save the updated paragraph
    await paragraph.update({ content: updatedContent });

    // Fetch the paragraph with its references to return
    const paragraphWithReferences = await Paragraph.findByPk(paragraph.id, {
      include: [{ model: Reference, as: "References" }],
    });

    res.status(201).json(paragraphWithReferences);
  } catch (error) {
    console.error("Error creating paragraph with references:", error);
    res
      .status(500)
      .json({ error: "Failed to create paragraph with references." });
  }
};

export const getParagraphsWithReferences = async (
  req: Request,
  res: Response
) => {
  try {
    const paragraphs = await Paragraph.findAll({
      include: [
        {
          model: Reference,
          attributes: ["id", "referenceType", "referenceDetail"],
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

export const getParagraphWithReferencesById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params; // Extract paragraph ID from request parameters

  try {
    // Find the paragraph by ID, including its associated references
    const paragraph = await Paragraph.findByPk(id, {
      include: [
        {
          model: Reference,
          // through: { attributes: [] }, // Exclude intermediate table details
        },
      ],
    });

    if (!paragraph) {
      return res.status(404).json({ error: "Paragraph not found" });
    }

    // Respond with the paragraph and its references
    res.status(200).json(paragraph);
  } catch (error) {
    console.error("Error fetching paragraph with references:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch paragraph with references" });
  }
};
