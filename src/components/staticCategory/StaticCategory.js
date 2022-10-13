import React from "react";
import style from "./StaticCategory.module.css";
import Link from "next/link";

const category = [
  {
    title: "Home",
    link: "/",
  },
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
    title: "About us",
    link: "/aboutUs",
  },
  {
    title: "Privacy",
    link: "/privacy-policy",
  },
];

function StaticCategory() {
  return (
    <div className={style.container}>
      {category.map((cat) => (
        <Link key={cat.title} href={cat.link}>
          <div className={style.content}>
              <p className={style.text}>{cat.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StaticCategory;
