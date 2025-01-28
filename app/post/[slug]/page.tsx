import React, { Suspense } from "react";

import CommentSection from "./_components/CommentSection";
import Comments from "./_components/Comments";
import Post from "./_components/Post";
import SkeletonPost from "@/components/Skeletons/SkeletonPost";
import SkeletonComment from "@/components/Skeletons/SkeletonComment";

const PostPage = () => {
  return (
    <div className="h-full min-h-[90vh] max-h-[90vh] overflow-auto flex flex-col md:w-[80%] mx-auto">
      <Suspense fallback={<SkeletonPost />}>
        <Post />
      </Suspense>
      <CommentSection />
      <Suspense fallback={<SkeletonComment />}>
        <Comments />
      </Suspense>
    </div>
  );
};

export default PostPage;
