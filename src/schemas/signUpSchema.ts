import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "Username must be atleast 2 character")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be atleast 6 characters" }),
});
