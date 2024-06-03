"use client";

import { useState } from "react";

// const handleClick = () => {
//alert("You clicked me!");
// };

const Page = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddInputValue = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleDisplayInputValue = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div>
      <button
        className="bg-slate-400 items-center text-slate-50 px-10 rounded-lg "
        onClick={handleIncrement}
      >
        Click me
      </button>
      <h1>{count}</h1>
      <div>
        <input
          className="border-2 border-black"
          placeholder="Enter your name"
          onChange={handleAddInputValue}
        ></input>
        <button
          onClick={handleDisplayInputValue}
          className="bg-purple-300 px-10 rounded-md m-10 "
        >
          Show input
        </button>
        <p>{displayValue}</p>
      </div>
    </div>
  );
};

export default Page;
