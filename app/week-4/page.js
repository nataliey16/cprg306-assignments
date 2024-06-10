import React from "react";
import NewItem from "./new-item";

const page = () => {
  return (
    <div>
      <Link className="underline m-4 text-[#E0FBFC]" href="/">
        Return home
      </Link>
      <h1 className="m-4 text-[#E0FBFC] text-bold text-4xl">Add new item</h1>
      <NewItem />
    </div>
  );
};

export default page;
