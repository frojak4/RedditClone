"use client";
import React, { useActionState, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaX } from "react-icons/fa6";
import { PostCommentAction } from "@/actions/actions";

const CommentBox = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleButtonOpen = () => {
    setOpen((prev) => !prev);
  };

  const [data, action, isPending] = useActionState(
    PostCommentAction,
    undefined
  );

  return (
    <div className="mt-4 border-b border-mutedmidgray pb-4">
      {!open ? (
        <button
          className="flex p-2 border border-white/30 hover:border-foreground rounded-full text-sm md:text-base gap-2"
          onClick={handleButtonOpen}
        >
          <span className="mt-1">
            <FaPlus />
          </span>
          Add a comment
        </button>
      ) : (
        <div>
          <form className="flex md:flex-row flex-col gap-3" action={action}>
            <textarea
              name="comment"
              className="flex-1 p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-midpurp focus:border-midpurp resize-none text-mylighterblack"
              rows={2}
            />
            <div className="flex gap-2">
              <button
                className="flex p-2 border border-white/30 hover:border-foreground h-min rounded-full text-sm md:text-base gap-2"
                onClick={handleButtonOpen}
              >
                <span className="mt-1">
                  <FaX />
                </span>
                Cancel
              </button>
              <button
                type="submit"
                className="bg-lightestpurp/70 hover:bg-lightestpurp h-min px-4 py-2 text-sm md:text-base rounded-full flex gap-2"
              >
                <span className="mt-1">
                  <FaPlus />
                </span>
                Post
              </button>
            </div>
          </form>
          <h4 className="text-red-600 w-full">{data?.errors?.comment}</h4>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
