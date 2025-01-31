"use server";
import { redirect } from "next/navigation";
import { SignInSchema, SignUpSchema } from "./schema";
import { cookies } from "next/headers";

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

  const response = await fetch(`http://127.0.0.1:5000/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      username: ValidatedData.data.username,
      password: ValidatedData.data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!data.access_token) {
    return {
      errors: {
        password: "Username already taken",
      },
    };
  }
  const cookieStore = await cookies();
  cookieStore.set("access_token", data.access_token);
  redirect("/home");
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

  const response = await fetch(`http://127.0.0.1:5000/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      username: ValidatedData.data.username,
      password: ValidatedData.data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!data.access_token) {
    return {
      errors: {
        password: "Wrong username or password",
      },
    };
  }
  const cookieStore = await cookies();

  cookieStore.set("access_token", data.access_token);
  redirect("/home");
};

export const SignOutAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  redirect("/");
};
