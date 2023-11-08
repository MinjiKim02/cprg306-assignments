"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

  const data = await response.json();
  console.log(response);
  console.log(data);
  return data.meals;
}

// const fetchMealIdeas = async (ingredient) => {
//   try {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//     console.log('API Response:', response);
    
//     if (response.ok) {
//       const data = await response.json();
//       return data.meals || [];
//     } else {
//       throw new Error('Failed to fetch meal ideas');
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };


export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(ingredient);

async function loadMealIdeas() {
  try {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);  
    setLoading(false);
  }
    catch (error) {
      console.error(error);
    }
}

  // const loadMealIdeas = async () => {
  //   setLoading(true);
  //   const ideas = await fetchMealIdeas(ingredient);
  //   setMeals(ideas);
  //   setLoading(false);
  // };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);


  return (
    <div>
      <h2>Meal Ideas with {ingredient}:</h2>
      {meals == null && meals ==undefined ? (
        <p>Loading meal ideas...</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
        
      )}
    </div>
  );
}
