import React from "react";
import logoImg from "../assets/logo.jpg";
import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <div className="cart-total">
        <Button textOnly={true}>Cart (0)</Button>
      </div>
    </header>
  );
};
