import React from "react";
import style from "./Description.module.css";

function Description({ description, more = "" }) {
  return (
    <div>
      {description && (
        <p className={style.text}>{description.slice(0, 80)} ...</p>
      )}
    </div>
  );
}

export default Description;
