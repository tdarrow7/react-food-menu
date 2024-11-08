import React, { useContext } from "react";
import { Modal } from "./ui/Modal";
import { UserProgressContext } from "../context/UserProgressContext";
import { CartContext } from "../context/cartContext";
import { currencyFormatter } from "../util/formatting";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useHttp } from "../hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const Checkout = () => {
  const { userProgress, hideCheckout } = useContext(UserProgressContext);
  const { items, clearCart } = useContext(CartContext);
  const cartTotal = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  console.log("user progress", userProgress);

  const handleClose = () => {
    hideCheckout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  };

  const handleFinish = () => {
    handleClose();
    clearCart();
    clearData();
  };

  if (data && !error) {
    return (
      <Modal open={userProgress === "checkout"} onClose={handleClose}>
        <h2>Success!</h2>
        <p>Order submitted</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Ok</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgress === "checkout"}
      className="checkout"
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="Email" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>

        {error && <p>Something broke... {error.message}</p>}
        <p className="modal-actions">
          {isSending ? (
            <span>Sending order data...</span>
          ) : (
            <>
              <Button textOnly type="button" onClick={handleClose}>
                Close
              </Button>
              <Button>Submit Order</Button>
            </>
          )}
        </p>
      </form>
    </Modal>
  );
};
