import React from "react";
import { currencyFormatter } from "../util/formatting";
import { Button } from "./ui/Button";

export const MealItem = ({ name, description, image, id, price }) => {
  const formattedPrice = currencyFormatter.format(price);
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
          <Button>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};
