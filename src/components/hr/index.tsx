import React from "react";
import style from "./style.module.scss";

function HR() {
  return (
    <div className={style.box}>
      <img
        src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/base_render.png"
        alt="crm application"
        className={style.banner}
      />
    </div>
  );
}

export default HR;
