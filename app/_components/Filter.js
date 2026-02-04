"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activefilter = searchparams.get("capacity") ?? "all";
  function handlerClick(filter) {
    console.log(filter);
    const params = new URLSearchParams(searchparams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="boder border-primary-800 flex">
      <Button
        filter="all"
        handlefilter={handlerClick}
        activefilter={activefilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        handlefilter={handlerClick}
        activefilter={activefilter}
      >
        2&mdash;3 Guests
      </Button>

      <Button
        filter="medium"
        handlefilter={handlerClick}
        activefilter={activefilter}
      >
        4&mdash;7 Guests
      </Button>
      <Button
        filter="large"
        handlefilter={handlerClick}
        activefilter={activefilter}
      >
        8&mdash;12 Guests
      </Button>
    </div>
  );
}
function Button({ filter, handlefilter, activefilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activefilter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handlefilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
