import { createContext, useContext } from "react";

export const CartContext = createContext({
  items: [1, 2, 3],
});

export const CartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ items: [1, 2, 3, 4, 4] }}>
      {children}
    </CartContext.Provider>
  );
};
