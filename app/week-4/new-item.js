"use client";
import { useState } from "react";

import React from "react";

const FORM_STYLES = "flex flex-col m-4 bg-gray-100 rounded-md";
const INPUT_STYLE = "p-2 mx-0 my-2 rounded-md";

//change this to props later - for now, just hardcode the item*********************
const item = {
  name: "apple",
  category: "fruit",
  quantity: 2,
};

const NewItem = () => {
  //setVariables for - name, category, quantity
  const [name, setName] = useState(""); //default value is an empty string
  const [category, setCategory] = useState("Produce"); //default value is "produce"
  const [quantity, setQuantity] = useState(1); //default value is 1

  const handleSubmit = (e) => {
    e.preventDefault();
    //log item in the console
    // setName(item.name);
    setCategory(item.category);
    alert(`Item added: ${name}, quantity: ${quantity}, category: ${category}`);
    console.log(item);

    //reset the state - aka clear the form after I've added the item
  };

  return (
    <div className={FORM_STYLES}>
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
          <select
            className={`${INPUT_STYLE}`}
            placeholder={category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
        <div>
          <input
            className={INPUT_STYLE}
            type="number"
            min="1"
            max="99"
            value={quantity} // need to convert this into a number before setting the state **********
            onChange={(e) => setQuantity(e.target.value)}
            required
          ></input>
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
