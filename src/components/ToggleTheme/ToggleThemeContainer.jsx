import React, { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";

const ToggleThemeContainer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function renderThemeText() {
    if (theme === "light") {
      return "🌙";
    }
    return "☀️";
  }

  const onToggleHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={`text-2xl cursor-pointer mr-3 ${
        theme === "light" ? "text-black" : "text-white"
      } `}
      onClick={onToggleHandler}
    >
      {renderThemeText()}
    </div>
  );
};

export default ToggleThemeContainer;
