import FilterSelect from "@/components/FilterSelect";
import PostInList from "@/components/PostInList";
import React from "react";

const HomePage = () => {
  const posts: Post[] = [
    {
      community: "gaming",
      created_at: "13h ago",
      header: "Hello gaming friends!",
      content: "How are you guys doing?",
      user: "Hubert69",
      upvotes: 4,
    },
    {
      community: "flowers",
      created_at: "13h ago",
      header: "Hello flower friends!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user: "fridtjof420",
      upvotes: 13,
    },
    {
      community: "norway",
      created_at: "13h ago",
      header: "VERY NICE COUNTRY YES",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user: "frode",
      upvotes: 69,
    },
    {
      community: "gaming",
      created_at: "13h ago",
      header: "Hello gaming friends!",
      content: "How are you guys doing?",
      user: "Hubert69",
      upvotes: 4,
    },
    {
      community: "flowers",
      created_at: "13h ago",
      header: "Hello flower friends!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user: "fridtjof420",
      upvotes: 13,
    },
    {
      community: "norway",
      created_at: "13h ago",
      header: "VERY NICE COUNTRY YES",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user: "frode",
      upvotes: 69,
    },
    {
      community: "gaming",
      created_at: "13h ago",
      header: "Hello gaming friends!",
      content: "How are you guys doing?",
      user: "Hubert69",
      upvotes: 4,
    },
    {
      community: "flowers",
      created_at: "13h ago",
      header: "Hello flower friends!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user: "fridtjof420",
      upvotes: 13,
    },
    {
      community: "norway",
      created_at: "13h ago",
      header: "VERY NICE COUNTRY YES",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user: "frode",
      upvotes: 69,
    },
  ];

  return (
    <div className="overflow-auto h-full max-h-[90vh] w-full">
      <div className="flex flex-col gap-2 overflow-auto pt-2">
        <div className="w-[90%] mx-auto">
          <FilterSelect />
        </div>
        {posts.map((post, i) => {
          return <PostInList key={i} post={post} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
