import React from "react";
import style from "./style.module.scss";
import { companies } from "@/constants";

function CompanyTestimonial() {
  const DISPLAY_LIMIT = 6;
  const INTERVAL_TIME = 4000;

  const [displayedIcons, setDisplayedIcons] = React.useState<Array<IIcons>>([]);

  React.useEffect(() => {
    setDisplayedIcons(companies?.slice(0, DISPLAY_LIMIT));

    const intervalId = setInterval(() => {
      setDisplayedIcons((prevDisplayedIcons) => {
        const remainingcompanies = companies.filter(
          (icon) => !prevDisplayedIcons.includes(icon)
        );
        const randomCompany =
          remainingcompanies[
            Math.floor(Math.random() * remainingcompanies.length)
          ];
        const randomIndex = Math.floor(Math.random() * DISPLAY_LIMIT);

        const newDisplayedIcons = [...prevDisplayedIcons];
        newDisplayedIcons[randomIndex] = randomCompany;
        return newDisplayedIcons;
      });
    }, INTERVAL_TIME);

    return () => clearInterval(intervalId);
  }, companies);

  return (
    <div className={style.conatiner}>
      <p>Trusted by developers from</p>
      <div className={style.grid}>
        {displayedIcons?.map((icon) => (
          <div className={style.item} key={icon.id}>
            {icon.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyTestimonial;
