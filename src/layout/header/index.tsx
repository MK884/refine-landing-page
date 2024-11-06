import React from "react";
import style from "./style.module.scss";
import { Refine, ThemeButton } from "@/components";
import { FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { nav } from "@/constants";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.left}>
          <a href="">
            <Refine />
          </a>
          <div className={style.menus}>
            {nav?.map((item) => (
              <Menu
                title={item.title}
                subMenu={item?.subItems && <SubElement />}
              />
            ))}
          </div>
        </div>
        <div className={style.right}>
          <div className={style.actions}>
            <button className={style.button}>
              <IoSearchOutline size={18} />
              <p>Serach</p>
              <div className={style.key}>
                <MdOutlineKeyboardCommandKey size={12} />
                <p>K</p>
              </div>
            </button>
            <button className={style.button}>
              <FaGithub size={20} />
              28.3K
            </button>
            <ThemeButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

const Menu = ({
  title,
  subMenu,
  isCenter = true,
}: {
  title: string;
  subMenu?: React.ReactElement;
  isCenter?: boolean;
}) => {
  return (
    <div className={style.menu}>
      <div className={style.title}>
        {title}
        {subMenu && (
          <>
            <MdKeyboardArrowDown />
            <div className={style.sqr} />
          </>
        )}
      </div>
      {subMenu && (
        <div className={`${style.subMenu} ${isCenter ? style.center : null}`}>
          <div className={style.container}>{subMenu}</div>
        </div>
      )}
    </div>
  );
};

const SubElement = () => {
  return <div>subelement</div>;
};
