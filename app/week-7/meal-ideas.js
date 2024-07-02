"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdea = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdea();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <p>Here are some meal ideas using ${ingredient}</p>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal, index) => (
            <li key={index.idMeal}>
              {meal.strMeal}
              <Image src={meal.strMealThumb} alt={strMeal} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal idea ideas found for `${ingredient}`</p>
      )}
    </div>
  );
};

export default MealIdeas;

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch API.");
    }
    const data = await response.json();
    console.log(data);
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};
