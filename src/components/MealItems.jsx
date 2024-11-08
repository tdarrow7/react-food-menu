import React, { useEffect, useState } from "react";
import { MealItem } from "./MealItem";
import { useHttp } from "../hooks/useHttp";

const initialConfig = {};
export const MealItems = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", initialConfig, []);

  if (isLoading) return <p className="center">Loading meals...</p>;
  if (error) return <p className="center">crashed...</p>;

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            meal={meal}

            // id={foodItem.id}
            // name={foodItem.name}
            // image={foodItem.image}
            // description={foodItem.description}
            // price={foodItem.price}
          />
        );
      })}
    </ul>
  );
};
