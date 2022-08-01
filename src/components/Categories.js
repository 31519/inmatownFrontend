import React from "react";
import Link from "next/link";
import Image from "next/image";

import categoriesStyle from "../styles/Categories.module.css";

// import randomColor from "randomcolor"

// const color = randomColor()

const Categories = () => {
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
    // {
    //   title: "Event/Scheme",
    //   link: "/event",
    //   image: "/event.jpg",
    // },
    // {
    //   title: "Tourisms",
    //   link: "/tourisms",
    //   image: "/tourisms.jpg",
    // },
    // {
    //   title: "Celebrity",
    //   link: "/celebrity"
    // },
    // {
    //   title: "Resell",
    //   link: "/resell",
    //   image: "images/static/resell.jpg",
    // },
    // {
    //   title: "Rent In My Area",
    //   link: "/rental"
    // },
  ];

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
        {listCategory &&
          listCategory.map((list) => (
            <div className={categoriesStyle.card} key={list.title}>
              <Link className={categoriesStyle.link} href={list.link}>
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
              </Link>
            </div>
          ))}
      </div>
      <div className={categoriesStyle.container}>
        {listCategory &&
          listCategory.map((list) => (
            <div className={categoriesStyle.item} key={list.title}>
              <Link className={categoriesStyle.link} href={list.link}>
                <h2 className={categoriesStyle.title} variant="h3">
                  {list.title}
                </h2>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
