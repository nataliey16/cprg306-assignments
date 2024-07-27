"use client";
import { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  //1. Sort items array based on name or category

  const sortedItems = () => {
    return [...items].sort((itemA, itemB) => {
      if (!itemA || !itemB) return 0; // Handle undefined items
      const aName = itemA.name || ""; // Default to empty string if undefined
      const bName = itemB.name || "";
      const aCategory = itemA.category || ""; // Default to empty string if undefined
      const bCategory = itemB.category || "";

      if (sortBy === "name") {
        return aName.localeCompare(bName);
      } else if (sortBy === "category") {
        return aCategory.localeCompare(bCategory);
      }
      return 0;
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
          <Item key={index} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
