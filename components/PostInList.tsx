import { Skeleton } from "@/app/lib/ui/Skeleton";
import Link from "next/link";
import React from "react";
import { FaArrowUp, FaArrowDown, FaRegComment } from "react-icons/fa";

const PostInList = ({ post }) => {
  return (
    <div className="rounded-xl bg-mylighterblack p-4 w-[90%] mx-auto">
      <div className="flex ">
        <Link href={`/r/${post.community}`}>
          <h3 className="font-light pr-2">r/{post.community}</h3>
        </Link>

        <h3>• {post.created_at}</h3>
      </div>
      <Link href={`/post/${post.uuid}`}>
        <h4 className="font-bold pt-2">{post.title}</h4>
        <h4 className="line-clamp-3">{post.content}</h4>
      </Link>
      <div className="flex gap-4">
        <div className="text-xl flex gap-2 rounded-full bg-mutedmidgray w-min px-2 mt-2 py-1">
          <button className="hover:text-lightpurp">
            <FaArrowUp />
          </button>
          <h3 className="text-base">13</h3>
          <button className="hover:text-lightpurp">
            <FaArrowDown />
          </button>
        </div>
        <button className="bg-mutedmidgray gap-2 flex px-2 py-1 w-min rounded-full mt-2 text-xl hover:bg-mutedmidgray/70">
          <span className="text-base">46</span> <FaRegComment />
        </button>
      </div>
    </div>
  );
};

export default PostInList;
