import React from "react";
import CommentBox from "./CommentBox";
import FilterSelect from "@/components/FilterSelect";

const CommentSection = () => {
  return (
    <section className="flex flex-col md:w-[70%] w-[80%] mx-auto">
      <CommentBox />

      <FilterSelect />
    </section>
  );
};

export default CommentSection;
