import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import { Button } from "./ui/Button";
import { CartContext } from "../context/cartContext";
import { CartButton } from "./cart/CartButton";
import { Cart } from "./cart/Cart";

export const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <CartButton />
    </header>
  );
};
