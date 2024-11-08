import React, { useContext } from "react";
import { currencyFormatter } from "../../util/formatting";
import { CartContext } from "../../context/cartContext";

export const CartItem = ({
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
}) => {
  const itemTotalPrice = quantity * price;

  return (
    <li className="cart-item">
      <p>
        {name} - {currencyFormatter.format(itemTotalPrice)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrement}>+</button>
      </p>
    </li>
  );
};
