import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-4 flex justify-between px-20 border-solid border-0 border-b border-mutedmidgray">
      <Link href={"/home"}>
        <h1 className="text-2xl font-bold text-lightestpurp">Reddit</h1>
      </Link>
      <Link href={"/user/sign-in"}>
        <button className="bg-lightpurp hover:bg-lightpurp/80 rounded-full px-4 py-2 text-center">
          Log In
        </button>
      </Link>
    </div>
  );
};

export default Header;
