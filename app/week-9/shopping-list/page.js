"use client";
import Link from "next/link";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
// import ItemsData from "./items.json";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Image from "next/image";
import GitHubSvg from "../../../public/svg/github.svg";
import {
  addItem,
  deleteItem,
  getItems,
} from "../_services/shopping-list-service";

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user, gitHubSignIn } = useUserAuth();

  const handleDelete = async () => {
    const itemId = "8l9E2FySingYBd0wydki";
    try {
      await deleteItem(user?.uid, itemId);
      console.log(itemId);
    } catch (error) {
      console.error("Cannot delete item from database");
    }
  };

  //pass in a new object into the prev Items
  const handleAddItem = async (item) => {
    try {
      const itemId = await addItem(user?.uid, item);
      setItems((prevItems) => [...prevItems, { items, id: itemId }]);
    } catch (error) {
      console.error("Cannot add to the database");
    }
  };

  const loadItems = async () => {
    if (user) {
      const listOfItems = await getItems(user.uid);
      console.log(listOfItems);

      setItems(listOfItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

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
