"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const OtherInList = ({ name }: { name: string }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link href={`/${name}`}>
      <button
        disabled={pathname === `${name}`}
        className="px-4 py-2 text-lg self-start disabled:bg-mylighterblack rounded-lg w-full hover:bg-mutedmidgray"
      >
        {name}
      </button>
    </Link>
  );
};

export default OtherInList;
