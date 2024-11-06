import React, { useEffect, useState } from "react";
import { MealItem } from "./MealItem";

export const MealItems = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul id="meals">
      {foodItems.map((foodItem) => {
        return (
          <MealItem
            key={foodItem.id}
            {...foodItem}
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
