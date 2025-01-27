import React from "react";
import { FaArrowDown, FaArrowUp, FaRegComment } from "react-icons/fa";

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="rounded-xl bg-mylighterblack p-4 w-[90%] mx-auto m-2">
      <div className="flex ">
        <h3 className="font-bold pr-2">{comment.user}</h3>

        <h3>• {comment.created_at}</h3>
      </div>

      <h4 className="line-clamp-3 text-contenttext">{comment.content}</h4>
      <div className="flex gap-4">
        <div className="text-lg flex gap-1 pt-2">
          <button className="hover:text-lightpurp">
            <FaArrowUp />
          </button>
          <h3 className="text-base">{comment.upvotes}</h3>
          <button className="hover:text-lightpurp">
            <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
