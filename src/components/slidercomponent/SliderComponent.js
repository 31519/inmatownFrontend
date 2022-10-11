import React from "react";
import style from "./SliderComponent.module.css";
import Link from "next/link";
import Image from "next/image";

// COMPONENT IMPORT
// import TitleSmall from "../titlesmall/TitleSmall";
// import WideImage from "../image/WideImage";
// import SmallImage from "../image/SmallImage";
import Description from "../description/Description";
// import Date from "../date/Date";
import BrowseAll from "../browseall/BrowseAll";
// import Readmore from "../readmore/Readmore";

{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const SliderComponent = ({ datas, header, link }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  return (
    <div className={style.mainContainer}>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div className={style.container}>
        {datas &&
          datas.map((data, index) => (
            <Link href={`/${link}/${data.slug}/${data.id}`} key={data.id}>
              <div
                className={index === 0 ? style.contentDiv1 : style.contentDiv}
              >
                <div className={index === 0 ? style.imageDiv1 : style.imageDiv}>
                  {index === 0 && data.image && (
                    <Image
                      layout="fill"
                      className={style.image}
                      src={orig + data.image}
                      alt=""
                    />
                  )}
                </div>
                <div className={index === 0 ? style.titleDiv1 : style.titleDiv}>
                  <h2 className={style.title}>{data.title.slice(0, 80)} ...</h2>
                  <div className={style.description}>
                    {data.metadesc && (
                      <Description description={data.metadesc} />
                    )}
                  </div>
                  {/* <Date date={data.date} /> */}
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

export default SliderComponent;
