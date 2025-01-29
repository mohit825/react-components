import React, { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import { useLocalStorage } from "../../hooks/useLocalStorageHooks";

const ToggleThemeContainer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // const { setLocalStorage } = useLocalStorage();

  const [_, setThemePreference] = useLocalStorage("theme");

  function renderThemeText() {
    if (theme === "light") {
      return "🌙";
    }
    return "☀️";
  }

  const onToggleHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemePreference("dark");
    } else {
      setTheme("light");
      setThemePreference("light");
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
