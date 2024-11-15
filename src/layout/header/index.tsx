import React from "react";
import style from "./style.module.scss";
import { Github, Refine, ThemeButton } from "@/components";
import { FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { INav, ISubNav, nav } from "@/constants";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "@/context";
import Algolia from "@/assets/algolia.svg?react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

// main header
function Header() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef?.current?.showModal();
  };

  const closeDialog = () => dialogRef?.current?.close();

  const handleClick = (e: Event) => {
    if (dialogRef?.current && e.target === dialogRef.current) {
      closeDialog();
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault(); // preventing default behavior
      dialogRef?.current?.showModal();
      return;
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  React.useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => window.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <header className={style.header}>
      {/* search dialog */}
      <dialog onClose={closeDialog} className={style.dialog} ref={dialogRef}>
        <div className={style.dialog_box}>
          <div className={style.sreach_box}>
            <div className={style.search_input}>
              <IoSearchOutline size={22} className={style.icon} />
              <input type="text" autoFocus placeholder="Sreach docs" />
            </div>
            <div className={style.cancel} onClick={closeDialog}>
              Cancel
            </div>
          </div>
          <div className={style.sreaches}>No recent searches</div>
          <div className={style.dialog_footer}>
            <div className={style.keys}>
              <div className={style.key}>
                <button className={style.key_btn}>
                  <BsArrowReturnLeft />
                </button>
                <p>to select</p>
              </div>
              <div className={style.key}>
                <button className={style.key_btn}>
                  <FaArrowUpLong size={10} />
                </button>
                <button className={style.key_btn}>
                  <FaArrowDownLong size={10} />
                </button>
                <p>to navigate</p>
              </div>
              <div className={style.key}>
                <button className={style.key_btn} style={{ fontSize: "10px" }}>
                  esc
                </button>
                <p>to close</p>
              </div>
            </div>
            <div className={style.algolia}>
              Search by
              <Algolia />
            </div>
          </div>
        </div>
      </dialog>
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
                indicator={idx === 1 ? <NewBtn /> : undefined}
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
          <div className={style.burger_menu}>
            <BurgerNav />
          </div>
          <div className={style.actions}>
            <button className={style.button} onClick={openModal}>
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

export const NewBtn = () => {
  return (
    <div className={style.new_btn}>
      <p>new</p>
    </div>
  );
};

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
      <span>
        <Github />
      </span>
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
          <FaGithub size={18} color="var(--text-default)" />
        </a>
        <a href="https://discord.com/invite/refine" target="_blank">
          <FaDiscord size={20} color="#5865f2" />
        </a>
        <a href="https://x.com/refine_dev" target="_blank">
          <FaTwitter size={20} color="#6EB3F7" />
        </a>
      </div>
    </div>
  );
}

const Menu = ({
  title,
  subMenu,
  isCenter = true,
  indicator,
}: {
  title: string;
  subMenu?: React.ReactElement;
  isCenter?: boolean;
  indicator?: React.ReactElement;
}) => {
  return (
    <div className={style.menu}>
      <div className={style.title}>
        {title}
        {indicator}
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
        {subItems?.map((item) => (
          <NavSubItem item={item} key={item.title} />
        ))}
      </div>
      <div>{footer}</div>
    </>
  );
};

const NavSubItem = ({ item }: { item: ISubNav }) => {
  const Icon = item.icon?.Icon;
  let color = item.icon?.color;
  return (
    <div className={style.item}>
      <a href={item.link} target="_blank">
        <div className={`${style.icon_box} ${style[color]}`}>
          <Icon size={18} className={`${style.icon}  ${style[color]}`} />
        </div>
        <div className={style.info}>
          <p className={style.title}>{item.title}</p>
          <p className={style.caption}>{item.caption}</p>
        </div>
      </a>
    </div>
  );
};

const ThemeApperance = () => {
  const { theme, changeThemeTo } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={style.theme}>
      <p>Apperance</p>
      <div className={style.theme_actions}>
        <button
          className={style.btn}
          style={{
            backgroundColor: isDark
              ? "transparent"
              : "var(--background-surface-layer-01)",
          }}
          onClick={() => changeThemeTo("light")}
        >
          <IoSunnyOutline size={16} />
          <p>Light</p>
        </button>
        <button
          className={style.btn}
          style={{
            backgroundColor: isDark
              ? "var(--background-surface-layer-02)"
              : "transparent",
          }}
          onClick={() => changeThemeTo("dark")}
        >
          <FiMoon size={16} />
          <p>Dark</p>
        </button>
      </div>
    </div>
  );
};

function BurgerNav() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const togggleNav = () => setIsOpen((prev) => !prev);

  return (
    <div className={style.burger_nav}>
      {isOpen && <div className={style.overlay} />}
      <div className={style.burger}>
        {isOpen ? (
          <IoClose size={28} onClick={togggleNav} />
        ) : (
          <IoMenuOutline size={28} onClick={togggleNav} />
        )}
      </div>
      {isOpen && (
        <div className={style.container}>
          <div className={style.content}>
            {nav?.map((item, idx) => (
              <NavSections
                navItems={item}
                key={item.title}
                indicator={idx === 1 ? <NewBtn /> : undefined}
              />
            ))}
            {nav?.map((item, idx) => (
              <MobileNav
                navItems={item}
                key={item.title}
                indicator={idx === 1 ? <NewBtn /> : undefined}
              />
            ))}
            <ThemeApperance />
            <OpenSourceFooter />
          </div>
        </div>
      )}
    </div>
  );
}

const NavSections = ({
  navItems,
  indicator,
}: {
  navItems: INav;
  indicator?: React.ReactElement;
}) => {
  const subItems = navItems?.subItems;
  return (
    <div className={style.nav_section}>
      <div className={style.nav_indi}>
        <p
          className={style.nav_title}
          style={{ marginBottom: subItems ? 10 : 0 }}
        >
          {navItems.title}
        </p>
        {indicator}
      </div>
      {subItems && (
        <div className={`${style.nav_grid}`}>
          {subItems?.map((item) => (
            <NavSubItem item={item} key={item.title} />
          ))}
        </div>
      )}
    </div>
  );
};

function MobileNav({
  navItems,
  indicator,
}: {
  navItems: INav;
  indicator?: React.ReactElement;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const subItems = navItems?.subItems;
  return (
    <div className={style.mob_nav}>
      <div className={style.mob_nav_header} onClick={toggle}>
        <div className={style.nav_indi}>
          <p className={style.nav_title}>{navItems.title}</p>
          {indicator}
        </div>
        {subItems && (
          <div className={style.indicator}>
            {isOpen ? <FaChevronDown size={8} /> : <FaChevronRight size={8} />}
          </div>
        )}
      </div>
      {subItems && isOpen && (
        <div className={style.mob_nav_body}>
          {subItems?.map((item) => (
            <NavSubItem item={item} key={item.title} />
          ))}
        </div>
      )}
    </div>
  );
}
