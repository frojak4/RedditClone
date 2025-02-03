import PostInList from "@/components/PostInList";
import PostInListSkeleton from "@/components/Skeletons/PostInListSkeleton";
import React, { Suspense } from "react";
import { FaPlus } from "react-icons/fa6";
import Posts from "./_components/Posts";
import SkeletonPosts from "./_components/SkeletonPosts";
import FilterSelect from "../../../components/FilterSelect";
import Link from "next/link";
import CommunityButton from "./_components/CommunityButton";

const SubPage = async ({ params }) => {
  const { slug } = await params;

  const page = slug[0];
  const sortBy = slug[1];

  return (
    <div className="overflow-auto h-full max-h-[90vh] w-full">
      <section className="py-12">
        <div className="flex justify-between px-12 md:px-40">
          <h1 className="md:text-3xl text-2xl">r/{slug[0]}</h1>
          <div className="flex gap-2">
            <Link href={`/createpost?sub=${slug[0]}`}>
              <button className="flex p-2 border border-white/30 hover:border-foreground rounded-full text-sm md:text-base">
                <span className="mt-1">
                  <FaPlus />
                </span>
                Create Post
              </button>
            </Link>
            <CommunityButton sub={page} />
          </div>
        </div>
      </section>
      <div className="w-[90%] mx-auto">
        <FilterSelect />
      </div>
      <Suspense fallback={<SkeletonPosts />}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default SubPage;
