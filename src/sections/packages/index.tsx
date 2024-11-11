import React from "react";
import style from "./style.module.scss";
import { Button } from "@/components";
import { CiCircleChevRight } from "react-icons/ci";
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
            <div></div>
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
