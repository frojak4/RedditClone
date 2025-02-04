import React from "react";
import CommunityInList from "./CommunityInList";
import { Pathway_Gothic_One } from "next/font/google";
import { GetToken } from "@/actions/utils";
import HomeInList from "./OtherInList";
import OtherInList from "./OtherInList";

type CommunityType = {
  id: number;
  name: string;
};

const SideBar = async () => {
  const pathname = "/contact";

  const token = await GetToken();

  if (!token) {
    return <div></div>;
  }

  const data = await fetch(`http://127.0.0.1:5000/getcommunities`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });

  const jsondata = await data.json();

  const communities: CommunityType[] = jsondata.data[0];

  return (
    <div className="hidden md:flex flex-col justify-between w-[20vw] max-w-[20vw] min-w-[20vw] pt-8  border-r border-mutedmidgray">
      <div className="gap-2 px-4 flex flex-col">
        <OtherInList name="home" />
        <h3 className="text-sm font-light px-4 py-2 border-b border-mutedmidgray/80 text-center">
          Your communities:
        </h3>
        {communities.map((community) => {
          return <CommunityInList name={community.name} key={community.id} />;
        })}
        <h3 className="text-sm font-light px-4 py-2 border-b border-mutedmidgray/80 text-center">
          Other:
        </h3>
        <OtherInList name={"contact"} />
        <OtherInList name={"about"} />
      </div>
      <div className="text-center text-sm">Made by Frode Jakobsen, 2025</div>
    </div>
  );
};

export default SideBar;
