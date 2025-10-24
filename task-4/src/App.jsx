import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeToggler from "./ThemeToggler";
const App = () => {
  return (
    // ThemeProvider wraps ThemeToggler to provide global theme state using context API, avoiding prop drilling
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default App;
