import React, { useCallback, useContext } from "react";
import { Modal } from "../ui/Modal";
import { CartContext } from "../../context/cartContext";
import { currencyFormatter } from "../../util/formatting";
import { Button } from "../ui/Button";
import { UserProgressContext } from "../../context/UserProgressContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { userProgress, hideCart, showCheckout } =
    useContext(UserProgressContext);
  const cartTotal = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleCartClose = useCallback(() => {
    hideCart();
  }, []);

  const handleShowCheckout = useCallback(() => {
    showCheckout();
  }, []);

  return (
    <Modal
      className="cart"
      open={userProgress === "cart"}
      onClose={userProgress === "cart" ? handleCartClose : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrement={() => removeItem(item.id)}
            onIncrement={() => addItem(item)}
          />
        ))}
      </ul>
      {cartTotal === 0 && <p>Your cart is empty.</p>}
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly={true} onClick={handleCartClose}>
          Close
        </Button>
        {cartTotal > 1 && (
          <Button onClick={handleShowCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};
