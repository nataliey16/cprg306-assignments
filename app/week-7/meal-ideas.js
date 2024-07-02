"use client";
import { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState({});
  return <div>MealIdeas</div>;
};

export default MealIdeas;

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch api.");
    }
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};
