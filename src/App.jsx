import { MealItems } from "./components/MealItems";
import { Header } from "./components/Header";
import { useContext } from "react";
import { CartContext } from "./context/cartContext";

function App() {
  const Ctxt = useContext(CartContext);
  console.log(Ctxt.items);

  return (
    <>
      <Header />
      <MealItems />
    </>
  );
}

export default App;
