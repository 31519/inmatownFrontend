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
} from "next-share";

const SocialShare = ({ url, datas }) => {
  const title = datas.title;

  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  const urlShare = `${frontendUrl}/${url}/${datas.slug}/${datas.id}`;

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
        url={`${urlShare}`}
        quote={title}
        className={shareStyle.socialContainer}
      >
        <TwitterIcon className={shareStyle.socialMediaButton} />
      </TwitterShareButton>
      <TelegramShareButton url={`${urlShare}`} title={title}>
        <TelegramIcon className={shareStyle.socialMediaButton} />
      </TelegramShareButton>
      <FacebookShareButton
        // url={`${process.env.REACT_APP_PORT}/#/${item.redirect}/${item.id}/${item.slug}`}
        url={`${urlShare}`}
        title={title}
      >
        <FacebookIcon className={shareStyle.socialMediaButton} />
      </FacebookShareButton>

      <WhatsappShareButton
        url={`${urlShare}`}
        // title={title}
      >
        <WhatsappIcon className={shareStyle.socialMediaButton} />
      </WhatsappShareButton>
      <a
        className={shareStyle.atag}
        href={`//api.whatsapp.com/send?text=${urlShare}`}
        rel="nofollor"
        data-action="share/whatsapp/share"
      >
        <span>
          <WhatsappIcon className={shareStyle.socialMediaButton} />
        </span>
      </a>
    </div>
  );
};

export default SocialShare;
