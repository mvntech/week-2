import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggler = () => {
  // accessing the current theme state and toggle function from ThemeProvider using context API
  const { theme, toggleTheme } = useTheme();

  // styling configuration for `light` and `dark` modes
  
  const mainStyles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
    color: theme === "light" ? "#121212" : "#f5f5f5",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const buttonStyles = {
    padding: "0.8rem 1.5rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: theme === "light" ? "#333" : "#eee",
    color: theme === "light" ? "#eee" : "#333",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <main style={mainStyles}>
      <p style={{ fontSize: "1.2rem" }}>
        Current theme: {theme === "light" ? "Light" : "Dark"}
      </p>
      <button style={buttonStyles} onClick={toggleTheme}>
        Activate {theme === "light" ? "dark" : "light"} theme
      </button>
    </main>
  );
};

export default ThemeToggler;
