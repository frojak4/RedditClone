"use server";
import { SignInSchema, SignUpSchema } from "./schema";

export const SignUpAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const ValidatedData = SignUpSchema.safeParse({
    username: formData.get("username") as string,
    password: formData.get("password") as string,
    repeatpassword: formData.get("repeatpassword") as string,
  });

  if (!ValidatedData.success) {
    return {
      errors: ValidatedData.error.flatten().fieldErrors,
    };
  }
};

export const SignInAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const ValidatedData = SignInSchema.safeParse({
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  });

  if (!ValidatedData.success) {
    return {
      errors: ValidatedData.error.flatten().fieldErrors,
    };
  }
};
