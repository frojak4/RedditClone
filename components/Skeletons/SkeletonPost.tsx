import Link from "next/link";
import React from "react";

const SkeletonPost = () => {
  return (
    <>
      <section className="flex flex-col w-[70%] rounded-lg mx-auto">
        <div className="flex justify-between w-full mt-6">
          <div className="flex">
            <div className="flex flex-col gap-2 py-2">
              <div className="w-[150px] h-[15px] rounded-md bg-mutedmidgray animate-pulse" />
              <div className="w-[70px] h-[15px] rounded-md bg-mutedmidgray animate-pulse" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <div className="md:w-[400px] w-[230px] h-[40px] rounded-md bg-mutedmidgray animate-pulse py-2" />
          <div className="md:w-[300px] w-[180px] h-[80px] rounded-md bg-mutedmidgray animate-pulse my-3" />
        </div>
        <div className="flex gap-4">
          <div className="w-[60px] h-[30px] bg-mutedmidgray animate-pulse py-2 rounded-full" />

          <div className="w-[60px] h-[30px] bg-mutedmidgray animate-pulse py-2 rounded-full" />
        </div>
      </section>
    </>
  );
};

export default SkeletonPost;
