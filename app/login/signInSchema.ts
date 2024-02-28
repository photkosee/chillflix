import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .trim()
    .min(1, "Password is required.")
    .min(4, "Your password must contain between 4 and 60 characters.")
    .max(60, "Your password must contain between 4 and 60 characters."),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
