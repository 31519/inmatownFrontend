import React from "react";
import style from "./Detail.module.css";
import Link from "next/link";
import Image from "next/image";
// COMPONENT IMPORT
import LoaderBbcComponent from "../LoaderBBCComponent/loaderBBCComponent";

import Date from "../date/Date";
import RichText from "../richtext/RichText";

{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const Detail = ({ datas, header, defaultImage }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  return (
    <div className={style.mainContainer}>
      {!datas && <LoaderBbcComponent />}
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div className={style.container}>
        {datas && (
          <div className={style.contentDiv}>
            <div className={style.imageDiv}>
              {datas.image ? (
                <Image
                  layout="fill"
                  className={style.image}
                  src={orig + datas.image}
                  alt=""
                />
              ) : (
                <Image
                  layout="fill"
                  className={style.image}
                  src={defaultImage}
                  alt=""
                />
              )}
            </div>
            <Date date={datas.date} />
            <div className={style.titleDiv}>
              <h2 className={style.title}>{datas.title}</h2>
              <div className={style.description}>
                <RichText datas={datas} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
