import Image from "next/image";
import { useState } from "react";
import bbcStyle from "../styles/bbcStyle.module.css";

const ImageComponent = ({ img, index=1 }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const imgOrg = orig + img;
  const staticImg = "/jobs.jpg";

  const handleOnError = () => {
    console.log("imageerror");
    setImgSrc("/static/jobs.jpg");
  };

  return (
    <>
      {/* { img? (<Image
                className={mainScreen1.image}
                src={imgOrg}
                alt=''
                layout="fill"
                onError={handleOnError}
                />
            ): (<Image
                className={mainScreen1.image}
                src={staticImg}
                alt=""
                layout="fill"
                onError={handleOnError}
                />
                )
        } */}

      {/* <Image
        className={mainScreen1.image}
        src={img?imgOrg:staticImg}
        alt=""
        layout="fill"
        onError={handleOnError}
      /> */}

      <Image
        className={index == 0 ? bbcStyle.image0 : bbcStyle.image}
        src={img?imgOrg:staticImg}
        alt=""
        layout="fill"
      />
    </>
  );
};

export default ImageComponent;
