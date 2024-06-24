"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  //1. Sort items array based on name or category
  const sortedItems = () => {
    return [...items].sort((itemA, itemB) => {
      if (sortBy == "name") {
        return itemA.name.localeCompare(itemB.name);
      } else if (sortBy == "category") {
        return itemA.category.localeCompare(itemB.category);
      }
    });
  };

  return (
    <div>
      <div className="flex flex-row text-white">
        <p className="m-6">Sort by:</p>
        <button
          className={
            "rounded-md p-4 mx-4 mb-4 " +
            (sortBy === "name" ? " bg-[#fb923c]" : "opacity-50 bg-[#fb923c]")
          }
          value="name"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={
            "rounded-md p-4 mx-4 mb-4 " +
            (sortBy === "category"
              ? " bg-[#c2410c]"
              : "opacity-50 bg-[#c2410c]")
          }
          value="category"
          onClick={() => setSortBy("category")}
        >
          Category
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
