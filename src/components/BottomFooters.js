import React from "react";
import Link from "next/link";
import footerStyles from "../styles/Footers.module.css";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";



const BottomFooters = () => {
  return (
    <div>
      <div className={footerStyles.container}>
        <div className={footerStyles.item}>
          <h2 className={footerStyles.title}>GET IN TOUCH</h2>
          <hr className={footerStyles.breakLine} />
          <div className={footerStyles.itemList}>
            <h2 className={footerStyles.list} variant="h2">
              Shillong, Meghalaya , India
            </h2>

            <a className={footerStyles.list} href="mailto:inmatown@gmail.com">
              inmatown@gmail.com
            </a>
            <Link
              className={footerStyles.textLink}
              href="/privacy-policy"
            >
              <h2 className={footerStyles.list}>Privacy Policy</h2>
            </Link>
            <Link className={footerStyles.textLink} href="/aboutUs">
              <h2 className={footerStyles.list}>About Us</h2>
            </Link>
            <h2 className={footerStyles.list}>Connect with us on</h2>
            <div className={footerStyles.linkDiv}>
              <div className={footerStyles.linkDivList}>
                <a
                  className={footerStyles.list}
                  href="https://wa.me/9366993068"
                  target="_blank"
                >
                  <WhatsAppIcon className={footerStyles.socialIcon} />
                </a>
                {/* <p className={footerStyles.linkName}>memelander</p> */}
              </div>
              <div className={footerStyles.linkDivList}>
                <a
                  className={footerStyles.list}
                  href="https://www.instagram.com/inmatown/"
                  target="_blank"
                >
                  <InstagramIcon className={footerStyles.socialIcon} />
                </a>
                {/* <p className={footerStyles.linkName}>memelander</p> */}
              </div>
              <div className={footerStyles.linkDivList}>
                <a
                  className={footerStyles.list}
                  href="http://www.facebook.com/memelanderofficial/"
                  target="_blank"
                >
                  <FacebookIcon className={footerStyles.socialIcon} />
                </a>
                {/* <p className={footerStyles.linkName}>memelander</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className={footerStyles.item}>
          <h2 className={footerStyles.title}>SPONSORED BY</h2>
          <hr className={footerStyles.breakLine} />
          <div className={footerStyles.itemList}>
            <h2 className={footerStyles.list} variant="h2">
              STARDUST
            </h2>
            <Link className={footerStyles.textLink} href="/inmatown.com">
              <h2 className={footerStyles.list} variant="h2">
                INMATOWN
              </h2>
            </Link>
          </div>
        </div>

        <div className={footerStyles.item}>
          <h2 className={footerStyles.title}>LINKS</h2>
          <hr className={footerStyles.breakLine} />
          <div className={footerStyles.itemList}>
            <h2 className={footerStyles.list} variant="h2">
              STARDUST
            </h2>
            <Link className={footerStyles.textLink} href="/">
              <h2 className={footerStyles.list}>www.inmatown.com</h2>
            </Link>
            <h2 className={footerStyles.list}>All Right Reserved</h2>
            <h2 className={footerStyles.list}>Created by: Stardust</h2>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BottomFooters;
