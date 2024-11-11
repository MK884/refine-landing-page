import {
  Button,
  CompanyTestimonial,
  NpmButton,
  TabBody,
  TabSlider,
} from "@/components";
import { tabsData } from "@/constants";
import { CiPlay1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import style from "./style.module.scss";

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
          <Button
            text="See Docs"
            Icon={CiPlay1}
            onClick={() => window.open("https://refine.dev/docs/", "_blank")}
            IconSize={22}
          />
          <NpmButton />
        </div>
      </div>
      <TabSlider data={tabs} />
      <CompanyTestimonial />
    </section>
  );
}

export default HeroSection;
