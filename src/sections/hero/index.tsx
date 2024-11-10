import React from "react";
import style from "./style.module.scss";
import { FaStar } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { TabSlider, TabBody } from "@/components";
import { npm_command, tabsData } from "@/constants";

const tabs: Array<ITabs> = [
  {
    title: "CRM Application",
    body: <TabBody item={tabsData[0]} />,
  },
  {
    title: "E-Commerce Application",
    body: <TabBody item={tabsData[1]} />,
  },
  {
    title: "HR Application",
    body: <TabBody item={tabsData[2]} />,
  },
  {
    title: "DevOps Dashboard",
    body: <TabBody item={tabsData[3]} />,
  },
];

function HeroSection() {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const handleClickNpm = () => {
    setIsClicked(true);
    navigator.clipboard.writeText(npm_command);
    setTimeout(() => setIsClicked(false), 5000);
  };

  return (
    <section className={style.section}>
      <div className={style.info}>
        <button className={style.star_github}>
          <a href="https://github.com/refinedev/refine" target="_blank">
            <div className={style.btn}>
              <FaStar color="#ff9933" size={16} className={style.star} />
              <span>28.3K</span>
              <p>Github stars so far</p>
            </div>
          </a>
        </button>
        <div className={style.head}>
          <h1>Open-source Retool for Enterprise</h1>
          <p className={style.caption}>
            Build React-based internal tools, admin panels, dashboards & B2B
            apps with unmatched flexibility.
          </p>
        </div>
        <div className={style.actions}>
          <button className={style.doc_btn}>
            <CiPlay1 size={22} />
            see docs
          </button>
          <button className={style.npm_btn} onClick={handleClickNpm}>
            <span data-text={npm_command} className={style.npm}>
              {npm_command}
              {isClicked && (
                <>
                  <span className={style.copy} data-text="copied to clipboard!">
                    copied to clipboard!
                  </span>
                </>
              )}
            </span>
            <div className={style.bg} />
            {isClicked && (
              <div className={style.icon}>
                <MdDone size={14} />
              </div>
            )}
          </button>
        </div>
      </div>
      <TabSlider data={tabs} />
    </section>
  );
}

export default HeroSection;
