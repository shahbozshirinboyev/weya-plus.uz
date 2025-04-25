import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoGray900 from "/assets/logo/logo-gray-900.png";
import logoGray50 from "/assets/logo/logo-gray-50.png";

function Logo() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const navigate = useNavigate();

  // localStorage'dan theme qiymatini olib boshlang‘ich holatda saqlaymiz
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "theme") {
        setTheme(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme !== theme) {
        setTheme(currentTheme);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [theme]);

  const getActualTheme = (theme) => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "night"
        : "light";
    }
    return theme;
  };
  return (
    <img
      alt="LOGO"
      onClick={() => navigate("/")}
      src={getActualTheme(theme) === "night" ? logoGray50 : logoGray900}
      className="w-[70px] cursor-pointer"
    />
  );
}

export default Logo;
