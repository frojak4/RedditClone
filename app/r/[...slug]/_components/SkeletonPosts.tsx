import PostInListSkeleton from "@/components/Skeletons/PostInListSkeleton";
import React from "react";

const SkeletonPosts = () => {
  return (
    <div className="flex flex-col gap-2 overflow-auto pt-2">
      <PostInListSkeleton />
      <PostInListSkeleton />
      <PostInListSkeleton />
      <PostInListSkeleton />
      <PostInListSkeleton />
    </div>
  );
};

export default SkeletonPosts;
