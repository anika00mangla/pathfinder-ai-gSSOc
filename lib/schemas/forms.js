import { z } from "zod";

// Validates the raw text content of a resume save payload
export const resumeSaveSchema = z.object({
  content: z
    .string()
    .min(10, "Resume content is too short to be valid.")
    .max(25000, "Resume content exceeds the safe threshold of 25,000 characters.")
});

// Validates parameters targeting Gemini-backed contextual improvements
export const resumeImprovementSchema = z.object({
  current: z
    .string()
    .min(5, "Content must be at least 5 characters to improve.")
    .max(4000, "Content exceeds the safe threshold of 4,000 characters."),
  type: z
    .string()
    .min(2)
    .max(50)
});
