import React from "react";

const PostInListSkeleton = () => {
  return (
    <div className="rounded-xl bg-mylighterblack p-4 w-[90%] mx-auto">
      <div className="flex">
        <div className="w-[140px] h-[15px] rounded-md bg-mutedmidgray animate-pulse" />
      </div>
      <div className="w-[200px] h-[15px] mt-2 rounded-md bg-mutedmidgray animate-pulse" />
      <div className="w-[250px] h-[60px] mt-2 rounded-md bg-mutedmidgray animate-pulse" />
      <div className="flex gap-2">
        <div className="w-[75px] h-[30px] mt-2 rounded-full bg-mutedmidgray animate-pulse" />
        <div className="w-[60px] h-[30px] mt-2 rounded-full bg-mutedmidgray animate-pulse p-2"></div>
      </div>
    </div>
  );
};

export default PostInListSkeleton;
