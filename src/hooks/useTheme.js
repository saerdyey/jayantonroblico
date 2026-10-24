import { useState, useEffect } from "react";

const THEME_COLORS = { light: "#f3ead7", dark: "#171512" };

// public/index.html sets data-theme before first paint; start from that
const getInitialTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // storage unavailable (private mode etc.): theme still applies this visit
    }
    setTheme(next);
  };

  return [theme, toggleTheme];
};

export default useTheme;
