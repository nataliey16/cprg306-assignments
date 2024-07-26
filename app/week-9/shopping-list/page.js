"use client";
import Link from "next/link";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemsData from "./items.json";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Image from "next/image";
import GitHubSvg from "../../../public/svg/github.svg";
import { addItem } from "../_services/shopping-list-service";

const Page = () => {
  const [items, setItems] = useState(ItemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user, gitHubSignIn } = useUserAuth();

  const handleAdd = async () => {
    const item = {
      name: "Apple",
      category: "Fruit",
      quantity: 3,
    };
    try {
      const itemId = await addItem(user.uid, item);
      console.log(itemId);
    } catch (error) {
      console.error("Cannot add to the database");
    }
  };

  //pass in a new object into the prev Items
  const handleAddItem = async (newItem) => {
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
    <>
      <div>
        {user ? (
          <div>
            <Link className="underline m-4 text-[#E0FBFC]" href="/">
              Return home{" "}
            </Link>
            <button className="bg-red-200" onClick={handleAdd}>
              Add
            </button>
            <div className="flex items-start">
              {" "}
              {/* Adjusted for flex display */}
              <div className="column-1 flex-1">
                {" "}
                {/* Column 1 */}
                <h1 className="m-4 text-[#E0FBFC] font-bold text-4xl">
                  Interactive Shopping List
                </h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
              </div>
              <div className="column-2 flex-1">
                {" "}
                {/* Column 2 */}
                <MealIdeas ingredient={selectedItemName} />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid place-items-center h-screen">
            <button
              onClick={() => gitHubSignIn()}
              className="rounded flex items-center gap-4 shadow-xl pl-3 bg-white"
            >
              <Image src={GitHubSvg} alt="Github logo" width={30} height={30} />
              <span className="px-4 py-3 rounded">Sign in to Github</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
