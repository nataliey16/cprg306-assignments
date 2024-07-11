"use client";
import { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdea = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
    console.log(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdea();
    }
  }, [ingredient]);

  return (
    <div className="flex-1 max-w-sm m-2 flex-row text-white">
      <div>
        <h2 className="text-2xl px-4 pb-2">Meal Ideas</h2>
        <p className="text-md p-4">Select an items to see meal ideas</p>
        {Array.isArray(meals) && meals.length > 0 ? (
          <>
            <p className="text-md px-4">
              Here are some meal ideas using {ingredient}:{" "}
            </p>
            <ul className="text-md p-4">
              {meals.map((meal, index) => (
                <li key={meal.idMeal || index}>{meal.strMeal}</li> // Use meal.idMeal for key if available, else use index
              ))}
            </ul>
          </>
        ) : (
          ingredient && (
            <p className="text-md p-4">No meal ideas found for {ingredient}</p> // Display message if no meals found
          )
        )}
      </div>
    </div>
  );
};

export default MealIdeas;

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch API.");
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};
