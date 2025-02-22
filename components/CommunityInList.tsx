"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type CommunityInListProps = {
  name: string;
};

const CommunityInList = ({ name }: CommunityInListProps) => {
  const pathname = usePathname();

  return (
    <Link href={"/r/" + name}>
      <button
        disabled={pathname === "/r/" + name}
        className="px-4 py-2 text-lg self-start disabled:bg-mylighterblack rounded-lg w-full hover:bg-mutedmidgray"
      >
        {name}
      </button>
    </Link>
  );
};

export default CommunityInList;
