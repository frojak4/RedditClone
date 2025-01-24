import Link from "next/link";
import React from "react";

type CommunityInListProps = {
  active: boolean;
  name: string;
};

const CommunityInList = ({ active, name }: CommunityInListProps) => {
  return (
    <Link href={"/r" + name}>
      <button
        disabled={active}
        className="px-4 py-2 text-lg self-start disabled:bg-mylighterblack rounded-lg w-full hover:bg-mutedmidgray"
      >
        {name}
      </button>
    </Link>
  );
};

export default CommunityInList;
