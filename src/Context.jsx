import { createContext } from "react";

const NewsContext = createContext();

export const NewsProvoider = ({ children }) => {
  return <NewsContext.Provider value={0}>{children}</NewsContext.Provider>;
};
