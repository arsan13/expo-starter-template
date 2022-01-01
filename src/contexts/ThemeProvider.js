import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
