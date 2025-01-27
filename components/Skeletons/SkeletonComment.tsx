import React from "react";
import { FaArrowDown, FaArrowUp, FaRegComment } from "react-icons/fa";

const SkeletonComment = () => {
  return (
    <div className="rounded-xl bg-mylighterblack p-4 w-[90%] mx-auto m-2">
      <div className="flex ">
        <div className="w-[150px] h-[15px] rounded-md bg-mutedmidgray animate-pulse" />
      </div>

      <div className="w-[250px] h-[40px] rounded-md bg-mutedmidgray animate-pulse my-2" />
      <div className="flex gap-4">
        <div className="text-lg flex gap-1 pt-2">
          <div className="w-[30px] h-[30px] rounded-full bg-mutedmidgray animate-pulse" />
          <div className="w-[30px] h-[30px] rounded-full bg-mutedmidgray animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonComment;
