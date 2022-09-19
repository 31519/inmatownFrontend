import React from "react";

import mediaIcon from "../styles/MediaIcon.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MediaIcon = () => {
  return (
    <>
      {/* <h2 className={mediaIcon.list}>Connect with us on</h2> */}
      <div className={mediaIcon.linkDiv}>
        <div className={mediaIcon.linkDivList}>
          <a
            className={mediaIcon.list}
            href="https://wa.me/9366993068"
            target="_blank"
          >
            <WhatsAppIcon className={mediaIcon.socialIcon} />
          </a>
          {/* <p className={mediaIcon.linkName}>memelander</p> */}
        </div>
        <div className={mediaIcon.linkDivList}>
          <a
            className={mediaIcon.list}
            href="https://www.instagram.com/inmatown/"
            target="_blank"
          >
            <InstagramIcon className={mediaIcon.socialIcon} />
          </a>
          {/* <p className={mediaIcon.linkName}>memelander</p> */}
        </div>
        <div className={mediaIcon.linkDivList}>
          <a
            className={mediaIcon.list}
            href="http://www.facebook.com/memelanderofficial/"
            target="_blank"
          >
            <FacebookIcon className={mediaIcon.socialIcon} />
          </a>
          {/* <p className={mediaIcon.linkName}>memelander</p> */}
        </div>
      </div>
    </>
  );
};

export default MediaIcon;
