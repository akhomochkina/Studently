import { useState } from "react";
import { Context } from "../../App";
import Items from "../assets/data/items";

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Items);

  const data = {
    products,
    setProducts,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
