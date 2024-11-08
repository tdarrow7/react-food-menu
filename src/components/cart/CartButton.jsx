import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Button } from "../ui/Button";
import { UserProgressContext } from "../../context/UserProgressContext";

export const CartButton = () => {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const totalItems = items.reduce((acc, itm) => acc + itm.quantity, 0);

  const handleShowCart = () => {
    showCart();
  };
  return (
    <div className="cart-total">
      <Button textOnly={true} onClick={handleShowCart}>
        Cart ({totalItems})
      </Button>
    </div>
  );
};
