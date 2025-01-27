"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FilterSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [selectedSort, setSelectedSort] = useState(
    searchParams.get("sort") || "hot"
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="text-secondarytext p-2">
      Sort by:
      <select
        className="text-secondarytext bg-transparent select-none"
        id="sort"
        name="sort"
        onChange={handleSortChange}
        value={selectedSort}
      >
        <option className="bg-myblack selected:bg-black" value="hot">
          Hot
        </option>
        <option className="bg-myblack" value="new">
          New
        </option>
        <option className="bg-myblack" value="top">
          Top
        </option>
      </select>
    </div>
  );
};

export default FilterSelect;
