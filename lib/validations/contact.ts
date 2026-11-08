import { z } from "zod";

export const budgetRanges = [
  "Under $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  budget: z.enum(budgetRanges),
  brief: z.string().trim().min(20, "Tell us a bit more (20+ characters)").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
