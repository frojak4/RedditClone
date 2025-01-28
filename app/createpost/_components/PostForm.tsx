import React from "react";

const PostForm = ({ sub }: { sub: string }) => {
  return (
    <form className="flex-col text-mylighterblack justify-center mt-8 w-[90%] mx-auto">
      <div className="flex md:justify-between justify-center md:flex-row flex-col">
        <div className="p-4 flex-1">
          <h3 className="text-secondarytext">Title: </h3>
          <input
            name="header"
            className=" w-full rounded-md text-contenttext bg-mutedmidgray p-1"
          />
        </div>
        <div className="py-4 px-8">
          <h3 className="text-secondarytext">Sub: </h3>
          <h3 className="text-contenttext bg-mutedmidgray p-2 rounded-md">
            r/{sub}{" "}
          </h3>
        </div>
      </div>
      <div className="flex justify-center flex-col p-4">
        <h3 className="text-secondarytext">Content: </h3>
        <textarea
          className="flex-1 p-3 bg-mutedmidgray text-contenttext text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-midpurp focus:border-midpurp resize-none"
          rows={4}
        />
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 m-2 bg-lightpurp hover:bg-lightpurp/80 rounded-full text-white"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
