import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 3 characters" })
      .max(12, { message: "Username can be a maximum of 12 characters" }),
    password: z
      .string({ message: "Please enter valid password" })
      .min(6, { message: "Passwords must be between 6-24 characters" })
      .max(24, { message: "Passwords must be between 6-24 characters" }),
    repeatpassword: z.string({ message: "Please enter valid password" }),
  })
  .refine((data) => data.password === data.repeatpassword, {
    message: "Passwords do not match",
    path: ["repeatpassword"],
  });

export const SignInSchema = z.object({
  username: z
    .string({ message: "Please enter valid username" })
    .min(3, { message: "Please enter valid username" }),
  password: z.string({ message: "Please enter valid password" }),
});
