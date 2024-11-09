import React from "react";
import style from "./style.module.scss";
import DotWave from "@/components/dot";

function CRM() {
  return (
    <div className={style.box}>
      <img
        src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/base-render.png"
        alt="crm application"
        className={style.banner}
      />
      <DotWave
       styles={{
        position:'absolute',
        left: '50%',
        top: '50%',
       }}
      />
      <div className={style.blur} />
    </div>
  );
}

export default CRM;
