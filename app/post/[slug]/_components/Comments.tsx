import React, { Suspense } from "react";
import { comments } from "@/app/lib/FakeComments";
import Comment from "./Comment";
import SkeletonComment from "@/components/Skeletons/SkeletonComment";

const Comments = () => {
  return (
    <div className="w-[80%] mx-auto">
      {[...comments, ...comments].map((comment, i) => {
        return <Comment comment={comment} key={i} />;
      })}
    </div>
  );
};

export default Comments;
