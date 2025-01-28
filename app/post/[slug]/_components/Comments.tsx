import React, { Suspense } from "react";
import { comments } from "@/app/lib/FakeComments";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="md:w-[80%] mx-auto">
      {[...comments, ...comments].map((comment, i) => {
        return <Comment comment={comment} key={i} />;
      })}
    </div>
  );
};

export default Comments;
