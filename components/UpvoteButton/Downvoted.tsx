import { RemoveVote, UpvotePost } from "@/actions/actions";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Downvoted = ({ id }: { id: number }) => {
  return (
    <div className="text-xl flex gap-2 rounded-full bg-mutedmidgray w-min px-2 mt-2 py-1">
      <form action={UpvotePost} className="inline-flex">
        <input type="hidden" name="type" value="up" />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="hover:text-lightpurp">
          <FaArrowUp />
        </button>
      </form>
      <h3 className="text-base">13</h3>
      <form action={RemoveVote} className="inline-flex">
        <input type="hidden" name="type" value="down" />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="text-lightpurp">
          <FaArrowDown />
        </button>
      </form>
    </div>
  );
};

export default Downvoted;
