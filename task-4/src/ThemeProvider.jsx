import React, { createContext, useContext, useState } from "react";
import ThemeToggler from "./ThemeToggler";

// create a context with default value 'light'
const ThemeContext = createContext("light");

// custom hook for easier use of the context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};  