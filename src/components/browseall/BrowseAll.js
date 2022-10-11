import React from "react";
import Link from "next/link";
import style from "./BrowseAll.module.css";

function BrowseAll({ link }) {
  return (
    <div className={style.container}>
      <Link className={style.link} href={link}>
        <p className={style.text}>browse all ...</p>
      </Link>
    </div>
  );
}

export default BrowseAll;
