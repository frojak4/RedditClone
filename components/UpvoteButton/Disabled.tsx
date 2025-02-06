import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Disabled = () => {
  return (
    <div className="text-xl flex gap-2 rounded-full bg-mutedmidgray w-min px-2 mt-2 py-1">
      <button disabled={true} className="text-mylighterblack">
        <FaArrowUp />
      </button>
      <h3 className="text-base">13</h3>
      <button disabled={true} className="text-mylighterblack">
        <FaArrowDown />
      </button>
    </div>
  );
};

export default Disabled;
