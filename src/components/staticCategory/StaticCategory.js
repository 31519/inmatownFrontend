import React from "react";
import style from "./StaticCategory.module.css";
import Link from "next/link";

const category = [
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Jobs",
    link: "/news",
  },
  {
    title: "Education",
    link: "/news",
  },
  {
    title: "Notification",
    link: "/news",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "News",
    link: "/news",
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
