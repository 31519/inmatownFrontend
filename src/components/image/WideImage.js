import Image from "next/image";
import style from "./WideImage.module.css";

import React from "react";

function WideImage({ image }) {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  return (
    <div className={style.imageDiv}>
      {image && (

      <Image layout="fill" className={style.image} src={orig + image} alt="" />
      )}
    </div>
  );
}

export default WideImage;
