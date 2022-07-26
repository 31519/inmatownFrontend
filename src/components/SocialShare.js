import React from "react";
import shareStyle from "../styles/SocialShare.module.css";
import { Button } from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon,
} from 'next-share';


const SocialShare = ({ url }) => {
  return (
    <div className={shareStyle.container}>
      <Button
        className={shareStyle.button}
        size="medium"
        startIcon={<ShareIcon color="blue" />}
      >
        Share
      </Button>

      <TwitterShareButton
        url={url}
        quote={"CampersTribe - World is yours to explore"}
        className={shareStyle.socialContainer}
      >
        <TwitterIcon className={shareStyle.socialMediaButton} />
      </TwitterShareButton>
      <TelegramShareButton
        url={url}
      >
        <TelegramIcon className={shareStyle.socialMediaButton} />
      </TelegramShareButton>
      <FacebookShareButton
        // url={`${process.env.REACT_APP_PORT}/#/${item.redirect}/${item.id}/${item.slug}`}
        url={url}
      >
        <FacebookIcon className={shareStyle.socialMediaButton} />
      </FacebookShareButton>

      <WhatsappShareButton
        url={url}
      >
        <WhatsappIcon className={shareStyle.socialMediaButton} />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
