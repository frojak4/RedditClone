import React from "react";
import PostForm from "./_components/PostForm";
import { redirect } from "next/navigation";

const CreatePostPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { sub } = await searchParams;

  if (!sub) {
    redirect("/home");
  }

  return (
    <div className="h-full min-h-[90vh] max-h-[90vh] overflow-auto flex flex-col md:w-[50%] w-[70%] mx-auto">
      <PostForm sub={sub} />
    </div>
  );
};

export default CreatePostPage;
