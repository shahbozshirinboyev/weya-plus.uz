import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "night" : "light"
      );

      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "night") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="p-[2px] w-auto inline-block border border-gray-300 dark:border-gray-600 rounded-md">
      <div className="flex justify-between items-center w-[90px] h-[30px] relative">
        <div
          className="absolute bg-gray-900 dark:bg-gray-50 top-0 w-[30px] h-[30px] rounded-md transition-all duration-300"
          style={{
            left:
              theme === "light" ? "0px" : theme === "night" ? "30px" : "60px",
          }}
        ></div>

        <div
          onClick={() => handleThemeChange("light")}
          className={`w-[30px] h-[30px] flex justify-center items-center p-2 z-10 cursor-pointer ${
            theme === "light" ? "text-gray-50" : ""
          }`}
        >
          <i className="bi bi-sun flex justify-center items-center text-[14px]"></i>
        </div>

        <div
          onClick={() => handleThemeChange("night")}
          className={`w-[30px] h-[30px] flex justify-center items-center p-2 z-10 cursor-pointer ${
            theme === "night" ? "text-gray-900" : ""
          }`}
        >
          <i className="bi bi-moon flex justify-center items-center"></i>
        </div>

        <div
          onClick={() => handleThemeChange("system")}
          className={`w-[30px] h-[30px] flex justify-center items-center p-2 z-10 cursor-pointer ${
            isDarkMode && theme === "system" ? "text-gray-900" : ""
          } ${!isDarkMode && theme === "system" ? "text-gray-50" : ""}`}
        >
          <i className="bi bi-tv flex justify-center items-center"></i>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
