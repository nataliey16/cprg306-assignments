"use client";
import Link from "next/link";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemsData from "./items.json";
import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState(ItemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  //pass in a new object into the prev Items
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    // Ensure item is a string before attempting to split
    const cleanedName = String(itemName.name)
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanedName);
  };

  return (
    <div>
      <Link className="underline m-4 text-[#E0FBFC]" href="/">
        Return home{" "}
      </Link>
      <h1 className="m-4 text-[#E0FBFC] text-bold text-4xl">
        Interactive Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
};

export default Page;
