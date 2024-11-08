import React, { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import { Button } from "./ui/Button";
import { CartContext } from "../context/cartContext";

export const MealItem = ({ meal }) => {
  const { name, description, image, id, price } = meal;
  const formattedPrice = currencyFormatter.format(price);
  const { addItem } = useContext(CartContext);

  const handleAddItem = () => {
    addItem(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div className="">
          <h3>{name}</h3>
          <span className="meal-item-price">{formattedPrice}</span>
          <div className="meal-item-description">{description}</div>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItem}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};
