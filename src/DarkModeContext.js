import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(true);
  const switchModes = () => setDarkMode(!darkMode);

  const contextValue = {
    darkMode,
    switchModes
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {props.children}
    </DarkModeContext.Provider>
  )
}