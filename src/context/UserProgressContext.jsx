import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  userProgress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    console.log("sup");

    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressContext = {
    userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
};
