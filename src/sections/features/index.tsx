import React from "react";
import style from "./style.module.scss";

import { features } from "@/constants";
import { useTheme } from "@/context";

function Features() {
  const { theme } = useTheme();
  const INTERVAL_TIME = 3000;
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const handleClicks = (index: number) => {
    if (index < 0 || index > features.length) {
      setActiveIndex(0);
      return;
    }
    setIsClicked(true);

    setActiveIndex(index);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= features.length - 1) return 0;
        return prev + 1;
      });
    }, INTERVAL_TIME);

    if (isClicked) clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [isClicked]);

  return (
    <section className={style.section}>
      <div className={style.box}>
        <h2>
          The <span>sweet spot</span> between low-code and full-code.
        </h2>
        <p>
          Drag-and-drop tools shine initially but collapse under the weight of
          complexity. Refine offers comparable speed at the start and infinite
          scaling in the long run.
        </p>
      </div>
      <div className={style.box_2}>
        <div className={style.container}>
          <div
            className={`${style.linear_gradient} ${
              style[`${features[activeIndex].activeColor}`]
            }`}
          />
          <div className={style.info}>
            <h3>
              Business applications not only share fundamental UI elements, but
              also the underlying logic.
            </h3>
            <p>
              Stop writing repetitive code for CRUD, security and state
              management. Let Refine automatically transform your UI elements to
              enterprise-grade:
            </p>
            <div className={style.grid}>
              {features?.map((item, idx) => (
                <button
                  key={idx}
                  className={style.btn}
                  onClick={() => handleClicks(idx)}
                >
                  <div
                    className={
                      style[`${activeIndex === idx ? item.activeColor : ""}`]
                    }
                  >
                    <item.Icon size={18} />
                  </div>
                  <span
                    className={style.title}
                    style={{
                      color: activeIndex === idx ? "var(--text-default)" : "",
                    }}
                  >
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className={style.content}>
            <div className={style.image}>
              {features?.map((item, idx) => {
                const src = theme === "dark" ? item.darkSrc : item.lightSrc;
                return (
                  <img
                    src={src}
                    alt={item.name}
                    key={idx}
                    style={{
                      translate: activeIndex === idx ? "0%" : "200%",
                    }}
                  />
                );
              })}
            </div>
            {features?.map((item, idx) => {
              const src = theme === "dark" ? item.darkCode : item.lightCode;
              return (
                <div
                  className={style.code}
                  style={{
                    bottom: activeIndex === idx ? "60px" : "-100%",
                    opacity: activeIndex === idx ? 1 : 0,
                  }}
                >
                  <img key={idx} src={src} alt={item.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
