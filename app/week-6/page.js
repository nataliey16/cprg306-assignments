"use client";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemsData from "./items.json";
import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState(ItemsData);

  //pass in a new object
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
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
      <ItemList items={items} />
    </div>
  );
};

export default Page;
