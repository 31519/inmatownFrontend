import React from "react";
import style from "./SideviewOne.module.css";
import Link from "next/link";

// COMPONENT IMPORT
import TitleSmall from "../titlesmall/TitleSmall";
import WideImage from "../image/WideImage";
import SmallImage from "../image/SmallImage";
import Description from "../description/Description";
import Date from "../date/Date";
import BrowseAll from "../browseall/BrowseAll";
import Readmore from "../readmore/Readmore";

{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const SideviewOne = ({ datas, header, link }) => {
  return (
    <div className={style.container}>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div >
        {datas &&
          datas.map((data, index) => (
            <Link href={`/${link}/${data.slug}/${data.id}`}  key={data.id}>
              <div
                className={index === 0 ? style.contentDiv1 : style.contentDiv}
              >
                <div
                  className={index === 0 ? style.imageDiv1 : style.imageDiv}
                >
                  {index === 0 && <WideImage image={data.image} />}
                </div>
                <div
                  className={index === 0 ? style.titleDiv1 : style.titleDiv}
                >
                  <TitleSmall title={data.title} />
                  <div className={style.description}>
                    <Description
                      description={data.metadesc}
                    />
                  </div>
                  <Date date={data.date} />
                </div>
              </div>
            </Link>
            // </div>
          ))}
        <BrowseAll link={`/${link}`} />
      </div>
    </div>
  );
};

export default SideviewOne;
