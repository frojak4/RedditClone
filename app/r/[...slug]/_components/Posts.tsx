import React from "react";
import PostInList from "@/components/PostInList";

type PostsType = {
  title: string;
  id: number;
  created_at: string;
  content: string;
  community: string;
};

const Posts = async ({ sub }: { sub: string }) => {
  /* Fetching av posts skal skje her */

  const response = await fetch(`http://127.0.0.1:5000/getposts/${sub}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const posts: PostsType[] = await response.json();

  return (
    <div className="flex flex-col gap-2 overflow-auto pt-2">
      {posts.map((post, i) => {
        return <PostInList key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
