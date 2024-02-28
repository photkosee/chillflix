import { z } from "zod";

export const SignUpSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .min(5, "Email should be between 5 and 50 characters.")
    .email("Please enter a valid email address.")
    .max(50, "Email should be between 5 and 50 characters."),
  password: z
    .string()
    .trim()
    .min(1, "Password is required.")
    .min(6, "Password should be between 6 and 60 characters.")
    .max(60, "Password should be between 6 and 60 characters."),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
