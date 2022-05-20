import { useState, createContext } from "react";
import { getContrastColor, randomColorRgb, rgbToHex } from "../utils";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState(null);
  const [color, setColor] = useState("#ffffff");
  const reset = () => setBgColor(rgbToHex(randomColorRgb()));

  return (
    <AppContext.Provider
      value={{
        bgColor,
        selectedColor: color,
        setSelectedColor: setColor,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
