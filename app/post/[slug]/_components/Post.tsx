import { posts } from "@/app/lib/FakePosts";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowDown, FaArrowUp, FaRegComment } from "react-icons/fa";

const Post = () => {
  const post = posts[1];

  return (
    <section className="flex flex-col md:w-[70%] w-[80%] rounded-lg mx-auto">
      <div className="flex justify-between w-full mt-6">
        <div className="flex">
          <div className="flex flex-col">
            <Link href={`/r/${post.community}`}>
              <h3 className="font-semibold pr-2">r/{post.community}</h3>
            </Link>
            <Link href={"/home"}>
              <h3 className="text-secondarytext">{post.user}</h3>
            </Link>
          </div>
          <h3 className="text-secondarytext font-extralight">
            • {post.created_at}
          </h3>
        </div>

        <BsThreeDots className="text-2xl" />
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <h1 className="text-3xl font-semibold">{post.header}</h1>
        <h3 className="text-contenttext text-sm md:text-base">
          {post.content}
        </h3>
      </div>
      <div className="flex gap-4">
        <div className="text-xl flex gap-2 rounded-full bg-mutedmidgray w-min px-2 mt-2 py-1">
          <button className="hover:text-lightpurp">
            <FaArrowUp />
          </button>
          <h3 className="text-base">{post.upvotes}</h3>
          <button className="hover:text-lightpurp">
            <FaArrowDown />
          </button>
        </div>
        <button className="bg-mutedmidgray gap-2 flex px-2 py-1 w-min rounded-full mt-2 text-xl hover:bg-mutedmidgray/70">
          <span className="text-base">46</span> <FaRegComment />
        </button>
      </div>
    </section>
  );
};

export default Post;
