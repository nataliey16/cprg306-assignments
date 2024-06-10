"use client";
import { useState } from "react";

import React from "react";

const NewItem = () => {
  //setVariables for - name, category, quantity
  const [name, setName] = useState(""); //default value is an empty string
  const [category, setCategory] = useState("produce"); //default value is "produce"
  const [quantity, setQuantity] = useState(1); //default value is 1

  return <div>NewItem</div>;
};

export default NewItem;
