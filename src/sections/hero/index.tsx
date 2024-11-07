import React from "react";
import style from "./style.module.scss";
import { FaStar } from "react-icons/fa6";

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
      </div>
    </section>
  );
}

export default HeroSection;
