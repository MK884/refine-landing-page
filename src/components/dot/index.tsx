import React from "react";
import style from "./style.module.scss";

function DotWave({
  styles = {},
  classNames,
}: {
  styles?: React.CSSProperties;
  classNames?: string;
}) {
  return (
    <div className={`${style.dot} ${classNames}`} style={styles}>
      <div className={style.wave}/>
    </div>
  );
}

export default DotWave;
