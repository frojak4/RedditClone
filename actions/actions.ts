"use server";
import { CommentSchema, CreatePostSchema } from "./schema";

export const CreatePostAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const ValidatedData = CreatePostSchema.safeParse({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });

  if (!ValidatedData.success) {
    return {
      errors: ValidatedData.error.flatten().fieldErrors,
    };
  }
};

export const PostCommentAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const ValidatedData = CommentSchema.safeParse({
    comment: formData.get("comment") as string,
  });

  if (!ValidatedData.success) {
    return {
      errors: ValidatedData.error.flatten().fieldErrors,
    };
  }
};
