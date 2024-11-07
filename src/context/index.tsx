import React from "react";

const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
  changeThemeTo: (theme:Theme) => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
  changeThemeTo: () => {},
});

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const initializeTheme = (): Theme => {
    const savedTheme = localStorage.getItem("refine-theme") as Theme;
    return savedTheme || "dark";
  };

  const [theme, setTheme] = React.useState<Theme>(initializeTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("refine-theme", newTheme);
  };

  const changeThemeTo = (theme:Theme) => {
    if(!theme) return;
    setTheme(theme);
    localStorage.setItem("refine-theme", theme);
  }

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    return () => document.documentElement.removeAttribute("data-theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeThemeTo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
