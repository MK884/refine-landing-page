import { useTheme } from "@/context";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import style from "./style.module.scss";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button className={style.wrapper} onClick={toggleTheme}>
      <IoSunnyOutline
        size={16}
        className={`${style.icon} ${isDark ? style.active : ""}`}
      />
      <FiMoon
        size={18}
        className={`${style.icon} ${!isDark ? style.active : ""}`}
      />
    </button>
  );
}

export default ThemeButton;
