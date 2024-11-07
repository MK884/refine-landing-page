import React from "react";
import style from "./style.module.scss";
import { Github, Refine, ThemeButton } from "@/components";
import { FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ISubNav, nav } from "@/constants";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.left}>
          <a href="" className={style.a}>
            <Refine />
          </a>
          <div className={style.menus}>
            {nav?.map((item, idx) => (
              <Menu
                title={item.title}
                key={item.title}
                isCenter={idx !== 0}
                subMenu={
                  item?.subItems && (
                    <SubElement
                      subItems={item?.subItems}
                      gridCol={idx == 0 ? 2 : 1}
                      footer={footerComponents[idx]}
                    />
                  )
                }
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

const footerComponents = [
  <OpenSourceFooter />,
  <></>,
  <CommunityFooter />,
  <></>,
];

function OpenSourceFooter() {
  return (
    <a
      className={style.os__footer}
      href="https://github.com/refinedev/refine"
      target="_blank"
    >
      <Github />
      <p>If you like Refine, don’t forget to star us on GitHub!</p>
    </a>
  );
}
function CommunityFooter() {
  return (
    <div className={style.com__footer}>
      <p>Join the party!</p>
      <div>
        <a href="https://github.com/refinedev/refine" target="_blank">
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/refine" target="_blank">
          <FaDiscord size={20} />
        </a>
        <a href="https://x.com/refine_dev" target="_blank">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  );
}

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

const SubElement = ({
  subItems,
  gridCol = 1,
  footer,
}: {
  subItems: Array<ISubNav>;
  gridCol?: 1 | 2;
  footer?: React.ReactElement;
}) => {
  return (
    <>
      <div
        className={`${style.grid__container} ${style[`grid_col_${gridCol}`]}`}
      >
        {subItems?.map((item) => {
          const Icon = item.icon?.Icon;
          let color = item.icon?.color;
          return (
            <>
              <div className={style.item}>
                <a href={item?.link} target="_blank">
                  <div className={`${style.icon_box} ${style[color]}`}>
                    <Icon
                      size={16}
                      className={`${style.icon}  ${style[color]}`}
                    />
                  </div>
                  <div className={style.info}>
                    <p className={style.title}>{item.title}</p>
                    <p className={style.caption}>{item.caption}</p>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
      <div>{footer}</div>
    </>
  );
};
