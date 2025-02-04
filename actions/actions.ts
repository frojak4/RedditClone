"use server";
import { redirect } from "next/navigation";
import { CommentSchema, CreatePostSchema } from "./schema";
import { GetToken } from "./utils";
import { revalidatePath } from "next/cache";

export const CreatePostAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const ValidatedData = CreatePostSchema.safeParse({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    community: formData.get("community") as string,
  });

  if (!ValidatedData.success) {
    return {
      errors: ValidatedData.error.flatten().fieldErrors,
    };
  }

  const token = await GetToken();

  if (!token) {
    return {
      errors: {
        content: "Must be logged in to post",
      },
    };
  }

  const response = await fetch(`http://127.0.0.1:5000/createpost`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: ValidatedData.data.title,
      content: ValidatedData.data.content,
      community: ValidatedData.data.community,
    }),
  });

  const data = await response.json();
  console.log(data);

  if (data.success) {
    redirect("/post/" + data.uuid);
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

export const JoinCommunity = async (formData: FormData) => {
  const token = await GetToken();

  if (!token) {
    return;
  }

  const community = formData.get("community");

  const response = await fetch(
    `http://127.0.0.1:5000/handlemembership/${community}`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    }
  );

  revalidatePath("/r");
};

export const LeaveCommunity = async (formData: FormData) => {
  const token = await GetToken();

  if (!token) {
    return;
  }

  const community = formData.get("community");

  const response = await fetch(
    `http://127.0.0.1:5000/handlemembership/${community}`,
    {
      method: "delete",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    }
  );

  revalidatePath("/r");
};
