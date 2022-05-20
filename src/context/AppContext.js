import { useState, useEffect, createContext } from "react";
import { randomColorRgb, rgbToHex, getContrastColor } from "../utils";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("#000000");
  const [color, setColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const reset = () => {
    const randBgColor = randomColorRgb();
    const randTextColor = getContrastColor(randBgColor);
    console.log(randBgColor, randTextColor);
    setBgColor(rgbToHex(randBgColor));
    setColor("#FFFFFF");
    setTextColor(randTextColor);
  };

  useEffect(() => {
    reset();
  }, []);

  //useEffect(() => setTextColor(rgbToHex(getContrastColor(bgColor))), [bgColor]);
  return (
    <AppContext.Provider
      value={{
        bgColor,
        textColor,
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
