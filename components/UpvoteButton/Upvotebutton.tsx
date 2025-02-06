import { GetToken } from "@/actions/utils";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Disabled from "./Disabled";
import { UpvotePost } from "@/actions/actions";

const Upvotebutton = async ({ id }: { id: number }) => {
  const token = await GetToken();

  if (!token) {
    return <Disabled />;
  }

  const response = await fetch(`http://127.0.0.1:5000/uservote/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token?.value}`,
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();

  console.log(data);

  return (
    <div className="text-xl flex gap-2 rounded-full bg-mutedmidgray w-min px-2 mt-2 py-1">
      <form action={UpvotePost}>
        <input type="hidden" name="type" value="up" />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="hover:text-lightpurp">
          <FaArrowUp />
        </button>
      </form>
      <h3 className="text-base">13</h3>
      <form action={UpvotePost}>
        <input type="hidden" name="type" value="down" />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="hover:text-lightpurp">
          <FaArrowDown />
        </button>
      </form>
    </div>
  );
};

export default Upvotebutton;
