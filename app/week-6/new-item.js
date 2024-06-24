"use client";
import { useState } from "react";

const PAGE_STYLES = "flex flex-col m-4 bg-gray-200 rounded-md max-w-[400px] ";
const INPUT_STYLE =
  "w-full p-2 mx-0  my-2 rounded-md border-2 border-[#293241]";

//change this to props later - for now, just hardcode the item*********************
const item = {
  name: "apple",
  category: "fruit",
  quantity: 2,
};

const NewItem = ({ onAddItem }) => {
  //setVariables for - name, category, quantity
  const [name, setName] = useState(""); //default value is an empty string
  const [category, setCategory] = useState("Produce"); //default value is "produce"
  const [quantity, setQuantity] = useState(1); //default value is 1

  const handleSubmit = (e) => {
    e.preventDefault();
    //log item in the console

    // Function to generate a random ID
    const generateId = () => {
      return Math.random().toString(36).subStr(2, 9) + Date.now().toString(36);
    };

    const item = { id: generateId, name, quantity, category };

    onAddItem(item);

    //reset the state - aka clear the form after I've added the item
    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <div className={PAGE_STYLES}>
      <form className="flex flex-col m-4">
        <div>
          <input
            className={INPUT_STYLE}
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div className="columns-2 gap-1 flex-row flex">
          <input
            className={INPUT_STYLE}
            type="number"
            min="1"
            max="99"
            value={quantity} // need to convert this into a number before setting the state **********
            onChange={(e) => setQuantity(e.target.value)}
            required
          ></input>
          <select
            className={`${INPUT_STYLE}`}
            placeholder={category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Meat</option>
            <option>Frozen Foods</option>
            <option>Canned Goods</option>
            <option>Dry Goods</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Household</option>
            <option>Other</option>
          </select>
        </div>
      </form>

      <button
        className="bg-[#EE6C4D] rounded-md p-4 mx-4 mb-4"
        onClick={handleSubmit}
      >
        +
      </button>
    </div>
  );
};

export default NewItem;
