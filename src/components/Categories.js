import React from "react";
import Link from "next/link";
import Image from "next/image";

import categoriesStyle from "../styles/Categories.module.css";

// import randomColor from "randomcolor"

// const color = randomColor()

const listCategory = [
  {
    title: "Home",
    link: "/",
    image: "/tourisms.jpg",
  },
  {
    title: "Education",
    link: "/educations",
    image: "/education.jpg",
  },

  {
    title: "News",
    link: "/news",
    image: "/news.jpg",
  },
  {
    title: "Jobs",
    link: "/jobs",
    image: "/jobs.jpg",
  },
  {
    title: "Advertise",
    link: "/advertise",
    image: "/advertise.jpg",
  },
];

const Categories = ({category=listCategory}) => {


  // const init = () => {
  //   const items = document.getElementById('colors')
  //   items.style.backgroundColor = randomColor({hue: '#00FFFF', count: 18});
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].style.backgroundColor = randomColor({hue: '#00FFFF', count: 18});
  //   }
  // };

  // init();

  return (
    <>
      <div className={categoriesStyle.cardContainer}>
        {category &&
          category.map((list) => (
            <div className={categoriesStyle.card} key={list.title}>
              <Link className={categoriesStyle.link} href={list.link}>
                <a>
                <div className={categoriesStyle.cardItem} id="allcolor">
                  {list.image && (
                    <Image
                      layout="fill"
                      className={categoriesStyle.image}
                      src={list.image}
                      alt=""
                    />
                  )}
                  <h2 className={categoriesStyle.cardTitle} variant="h3">
                    {list.title}
                  </h2>
                </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
      <div className={categoriesStyle.container}>
        {listCategory &&
          listCategory.map((list) => (
            <div className={categoriesStyle.item} key={list.title}>
              <Link className={categoriesStyle.link} href={list.link}>
                <a>
                <h2 className={categoriesStyle.title} variant="h3">
                  {list.title}
                </h2>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
