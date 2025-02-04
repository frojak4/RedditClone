import { JoinCommunity, LeaveCommunity } from "@/actions/actions";
import { GetToken } from "@/actions/utils";
import React from "react";

const CommunityButton = async ({ sub }: { sub: string }) => {
  const token = await GetToken();

  if (!token) {
    return;
  }

  const response = await fetch(
    `http://127.0.0.1:5000/handlemembership/${sub}`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const { is_member } = await response.json();

  console.log(is_member);

  return (
    <>
      {is_member ? (
        <form action={LeaveCommunity}>
          <input type="hidden" value={sub} name="community" />
          <button
            type="submit"
            className="bg-lightestpurp/70 hover:bg-lightestpurp px-4 py-2 text-sm md:text-base rounded-full"
          >
            Leave
          </button>
        </form>
      ) : (
        <form action={JoinCommunity}>
          <input type="hidden" value={sub} name="community" />
          <button
            type="submit"
            className="bg-lightestpurp/70 hover:bg-lightestpurp px-4 py-2 text-sm md:text-base rounded-full"
          >
            Join
          </button>
        </form>
      )}
    </>
  );
};

export default CommunityButton;
