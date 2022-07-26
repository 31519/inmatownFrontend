import mainScreen1 from "../styles/MainScreenComponent1.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image"

const MainScreenComponent1 = ({ datas, header, link, pages, page }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  return (
    <div className={mainScreen1.mainContainer}>
      <div className={mainScreen1.header}>
        <h1 className={mainScreen1.header1}>{header}</h1>
      </div>
      {/* <hr /> */}
      {datas &&
        datas.map((data) => (
          <Link href={`/${link}/${data.slug}/${data.id}`}>
          <div className={mainScreen1.container}>
            <div className={mainScreen1.stateBox}>
              <h2 className={mainScreen1.brand} variant="p">
                Inmatown
              </h2>
            </div>
            <div className={mainScreen1.imageContainer}>
              {data.image && (
                <img
                className={mainScreen1.image}
                  src={orig + data.image}
                  alt=""
                  layout='fill'
                  // width={200}
                  // height={100}
                />
              )}
            </div>
            {/*  */}
            <div className={mainScreen1.textContainer}>
              <h4 className={mainScreen1.state}>Meghalaya </h4>
              <h2 className={mainScreen1.title}>{data.title}</h2>

              <p className={mainScreen1.posted}>
                Posted{" "}
                {moment.utc(data.createdAt).local().startOf("second").fromNow()}
              </p>
              <button className={mainScreen1.button}>Read More</button>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
};

export default MainScreenComponent1;
