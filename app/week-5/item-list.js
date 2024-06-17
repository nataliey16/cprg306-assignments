"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  //Sort items array
  const sortedItems = () => {
    return [...items].sort((itemA, itemB) => {
      if (sortBy == "name") {
        return itemA.name.localeCompare(itemB.name);
      } else if (sortBy == "category") {
        return itemA.category.localeCompare(itemB.category);
      }
      console.log(items);
    });
  };

  return (
    <div>
      <div className="flex flex-row text-white">
        <p className="m-6">Sort by:</p>
        <button
          className="bg-[#fb923c] rounded-md p-4 mx-4 mb-4"
          value="name"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="bg-[#c2410c] rounded-md p-4 mx-4 mb-4"
          value="category"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button className="bg-[#7c2d12] rounded-md p-4 mx-4 mb-4">
          Grouped Category
        </button>
      </div>
      <div>
        {sortedItems().map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
