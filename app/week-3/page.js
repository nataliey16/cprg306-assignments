import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <div>
      <h1 className="m-4 text-bold text-4xl">Shopping List</h1>
      <ItemList />
    </div>
  );
};

export default Page;
