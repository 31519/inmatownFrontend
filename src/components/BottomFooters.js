import React from "react";
import Link from "next/link";
import footerStyles from "../styles/Footers.module.css";
import { Grid } from "@mui/material";

import MediaIcon from "./MediaIcon";

const listCategory = [

  {
    title: "Jobs",
    link: "/jobs",
  },

  {
    title: "Education",
    link: "/educations",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Advertise",
    link: "/advertise",
  },
  {
    title: "Terms and Conditions",
    link: "/termsandcondition",
  },
];

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
            <Link className={footerStyles.textLink} href="/privacy-policy">
              <h2 className={footerStyles.list}>Privacy Policy</h2>
            </Link>
            <Link className={footerStyles.textLink} href="/aboutUs">
              <h2 className={footerStyles.list}>About Us</h2>
            </Link>
            <h2 className={footerStyles.list}>Connect with us on</h2>
            <MediaIcon />
          </div>
        </div>

        <div className={footerStyles.item}>
          <h2 className={footerStyles.title}>SPONSORED BY</h2>
          <hr className={footerStyles.breakLine} />
          <div className={footerStyles.itemList}>
            <h2 className={footerStyles.list} variant="h2">
              STARDUST
            </h2>
            <Link className={footerStyles.textLink} href="/">
              <h2 className={footerStyles.list} variant="h2">
                crfeeds
              </h2>
            </Link>
            <Link className={footerStyles.textLink} href="/">
              <h2 className={footerStyles.list}>www.crfeeds.in</h2>
            </Link>
            <h2 className={footerStyles.list}>All Right Reserved</h2>
            <h2 className={footerStyles.list}>Created by: Stardust</h2>
          </div>
        </div>

        <div className={footerStyles.item}>
          <h2 className={footerStyles.title}>LINKS</h2>
          <hr className={footerStyles.breakLine} />
          <div className={footerStyles.itemList}>
            {listCategory &&
              listCategory.map((list) => (
                <Link key={list.title} className={footerStyles.textLink} href={list.link}>
                  <h4 className={footerStyles.list}>{list.title}</h4>
                </Link>
              ))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooters;
