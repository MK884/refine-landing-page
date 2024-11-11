import React from "react";
import style from "./style.module.scss";
import { Button } from "@/components";
import { CiCircleChevRight } from "react-icons/ci";
import { packages, UIPackages } from "@/constants";
function Packages() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.box}>
          <h2>
            Start <span>faster</span>, maintain <span>easier</span>, manage{" "}
            <span>complexity</span>.
          </h2>
        </div>
        <div className={style.box_2}>
          <div className={style.container}>
            <div className={style.linear_gradient} />
            <div className={style.packages}>
              <div className={style.slide}>
                <Carousel>
                  <>
                    {UIPackages?.map((item, idx) => (
                      <PackageCard {...item} key={idx} />
                    ))}
                  </>
                </Carousel>
              </div>
              <div className={style.slide}>
                <Carousel direction="rtl">
                  <>
                    {packages?.map((item, idx) => (
                      <PackageCard {...item} key={idx} />
                    ))}
                  </>
                </Carousel>
              </div>
            </div>
            <div className={style.info}>
              <div className={style.title}>
                <h4>Seamless connectivity</h4>
              </div>
              <div className={style.action}>
                <h6>
                  Out-of-the box integrations for 15+ services including custom
                  REST and GraphQL API’s.
                </h6>
                <Button
                  text="All integrations"
                  Icon={CiCircleChevRight}
                  onClick={() =>
                    window.open("https://refine.dev/integrations/", "_blank")
                  }
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;

export const PackageCard = ({ Icon, name, npmCommand }: IPackage) => {
  return (
    <div className={style.card}>
      <div>{Icon}</div>
      <div className={style.name}>{name}</div>
      <div className={style.indicator}>
        <div className={style.command}>{npmCommand}</div>
      </div>
    </div>
  );
};

export const Carousel = ({
  children,
  direction = "ltr",
  speed = 50,
}: {
  direction?: "ltr" | "rtl";
  speed?: number;
  children: React.ReactElement;
}) => {
  const animationDuration = `${speed}s`;
  const animationDirection = direction === "ltr" ? "normal" : "reverse";
  return (
    <div className={style.carousel}>
      {Array(2) // Duplicate items for continuous effect
        .fill(children)
        .map((item, index) => (
          <div
            className={style.slider}
            style={{
              animationDuration,
              animationDirection,
            }}
            key={index}
          >
            {item}
          </div>
        ))}
    </div>
  );
};
