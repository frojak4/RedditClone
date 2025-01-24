import React from "react";
import { posts } from "@/app/lib/FakePosts";
import PostInList from "@/components/PostInList";

const Posts = async () => {
  /* Fetching av posts skal skje her */

  return (
    <div className="flex flex-col gap-2 overflow-auto pt-2">
      {posts.map((post, i) => {
        return <PostInList key={i} post={post} />;
      })}
    </div>
  );
};

export default Posts;
