import mainScreen from "../styles/MainScreenComponent.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image"

const MainScreenComponent = ({ datas, header,link }) => {
  const orig = "http://localhost:8000";
  return (
    <div className={mainScreen.mainContainer}>
      <div className={mainScreen.header}>

        <h1 className={mainScreen.header1}>{header}</h1>
        

      </div>
      <hr />
      {datas &&
        datas.map((data) => (
          <Link href={`/${link}/${data.slug}/${data.id}`}>
            <div className={mainScreen.container}>

              <div className={mainScreen.imageContainer}>
                {data.image && (
                  <Image
                    src={orig + data.image}
                    alt=""
                    layout='fill'
                  />
                )}
              </div>
              {/*  */}
              <div className={mainScreen.textContainer}>
                <h4 className={mainScreen.state}>Meghalaya </h4>
                <h2 className={mainScreen.title}>{data.title}</h2>

                <p className={mainScreen.posted}>
                  Posted{" "}
                  {moment
                    .utc(data.createdAt)
                    .local()
                    .startOf("second")
                    .fromNow()}
                  {/* <Moment >{data.createdAt} </Moment> */}
                  {/* Posted {data.createdAt && data.createdAt.split("T", 1)}  */}
                </p>
                {/* <button className={mainScreen.button}>Read More</button> */}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MainScreenComponent;
