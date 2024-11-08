import { MealItems } from "./components/MealItems";
import { Header } from "./components/Header";
import { useContext } from "react";
import { CartContext, CartContextProvider } from "./context/cartContext";
import { UserProgressContextProvider } from "./context/UserProgressContext";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <MealItems />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
