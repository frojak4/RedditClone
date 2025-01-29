import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(24, { message: "Title cannot be longer than 24 characters" }),
  content: z
    .string()
    .min(12, { message: "Post must be at least 12 characters long" })
    .max(400, { message: "Post cannot be longer than 200 characters long" }),
});

export const CommentSchema = z.object({
  comment: z
    .string()
    .min(3, { message: "Comment must be longer than 3 characters" })
    .max(80, { message: "Comment cannot be longer than 80 characters" }),
});
