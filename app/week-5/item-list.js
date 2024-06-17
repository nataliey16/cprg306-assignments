"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  //Sort items array
  const sortItems = items.sort((itemA, itemB) => {
    if (sortBy == "name") {
      return itemA.name.localeCompare(itemB.name);
    } else if (sortBy == "category") {
      return itemA.category.localeCompare(item.category);
    }
    console.log(items);
  });

  return (
    <div className="flex flex-row">
      <p className="text-white">Sort by:</p>
      <button
        className="bg-[#EE6C4D] rounded-md p-4 mx-4 mb-4"
        onClick={() => setSortBy(sortItems)}
      >
        Name
      </button>
      <button className="bg-[#EE6C4D] rounded-md p-4 mx-4 mb-4">
        Category
      </button>
      <button className="bg-[#EE6C4D] rounded-md p-4 mx-4 mb-4">
        Grouped Category
      </button>
    </div>
  );
};

export default ItemList;
