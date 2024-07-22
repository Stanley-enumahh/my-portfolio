import { createContext } from "react";
import { useState } from "react";

export const DarkmodeContext = createContext(null);

export const DarkmodeContextProvider = (props) => {
  const [darkMode, setDarkmode] = useState(false);
  const toggleDarkMode = () => {
    setDarkmode(!darkMode);
  };

  const contextValue = { darkMode, setDarkmode, toggleDarkMode };
  return (
    <DarkmodeContext.Provider value={contextValue}>
      {props.children}
    </DarkmodeContext.Provider>
  );
};
