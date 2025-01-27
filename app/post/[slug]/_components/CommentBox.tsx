"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaX } from "react-icons/fa6";

const CommentBox = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleButtonOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-[60%] mx-auto mt-4">
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
        <div className="flex gap-3">
          <textarea
            className="flex-1 p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-midpurp focus:border-midpurp resize-none text-mylighterblack"
            rows={2}
            maxLength={50}
            minLength={50}
          />
          <button
            className="flex p-2 border border-white/30 hover:border-foreground h-min rounded-full text-sm md:text-base gap-2"
            onClick={handleButtonOpen}
          >
            <span className="mt-1">
              <FaX />
            </span>
            Cancel
          </button>
          <button className="bg-lightestpurp/70 hover:bg-lightestpurp h-min px-4 py-2 text-sm md:text-base rounded-full flex gap-2">
            <span className="mt-1">
              <FaPlus />
            </span>
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
