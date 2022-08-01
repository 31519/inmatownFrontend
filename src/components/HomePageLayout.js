import HomeLayoutStyles from "../styles/HomeScreenLayout.module.css";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const HomePageLayout = ({
  datas1,
  datas2,
  datas3,
  header1,
  header2,
  header3,
  link1,
  link2,
  link3,
}) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  return (
    <div>
      <div className={HomeLayoutStyles.container}>
        <div className={HomeLayoutStyles.mainView}>
          <div className={HomeLayoutStyles.header}>
            <h1 className={HomeLayoutStyles.header1}>{header1}</h1>
          </div>
          {/* <hr /> */}
          {datas1 &&
            datas1.map((data) => (
              <Link href={`/${link1}/${data.slug}/${data.id}`}>
                <div className={HomeLayoutStyles.maincontainer}>
                  <div className={HomeLayoutStyles.stateBox}>
                    <h2 className={HomeLayoutStyles.brand} variant="p">
                      Inmatown
                    </h2>
                  </div>
                  <div className={HomeLayoutStyles.imageContainer}>
                    {data.image && (
                      <img
                        className={HomeLayoutStyles.image}
                        src={orig + data.image}
                        alt=""
                        layout="fill"
                        // width={200}
                        // height={100}
                      />
                    )}
                  </div>
                  {/*  */}
                  <div className={HomeLayoutStyles.textContainer}>
                    <h4 className={HomeLayoutStyles.state}>Meghalaya </h4>
                    <h2 className={HomeLayoutStyles.title}>{data.title}</h2>

                    <p className={HomeLayoutStyles.posted}>
                      Posted{" "}
                      {moment
                        .utc(data.createdAt)
                        .local()
                        .startOf("second")
                        .fromNow()}
                    </p>
                    <button className={HomeLayoutStyles.button}>
                      Read More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          <Link href={link1}>
            <div className={HomeLayoutStyles.browseAll}>Browse All</div>
          </Link>
        </div>

        {/*  */}

        <div className={HomeLayoutStyles.secondaryView}>
          {datas2 && (
            <div className={HomeLayoutStyles.mainContainer}>
              <div className={HomeLayoutStyles.header}>
                <h1 className={HomeLayoutStyles.header1}>{header2}</h1>
              </div>
              <hr />
              {datas2 &&
                datas2.map((data) => (
                  <Link href={`/${link2}/${data.slug}/${data.id}`}>
                    <div className={HomeLayoutStyles.secondcontainer}>
                      <div className={HomeLayoutStyles.imageContainer}>
                        {data.image && (
                          <Image src={orig + data.image} alt="" layout="fill" />
                        )}
                      </div>
                      {/*  */}
                      <div className={HomeLayoutStyles.textContainer}>
                        <h4 className={HomeLayoutStyles.state}>Meghalaya </h4>
                        <h2 className={HomeLayoutStyles.title}>{data.title}</h2>

                        <p className={HomeLayoutStyles.posted}>
                          Posted{" "}
                          {moment
                            .utc(data.createdAt)
                            .local()
                            .startOf("second")
                            .fromNow()}
                          {/* <Moment >{data.createdAt} </Moment> */}
                          {/* Posted {data.createdAt && data.createdAt.split("T", 1)}  */}
                        </p>
                        {/* <button className={HomeLayoutStyles.button}>Read More</button> */}
                      </div>
                    </div>
                  </Link>
                ))}
                <Link href={link2}>
                  <div className={HomeLayoutStyles.browseAll}>Browse All</div>
                </Link>
            </div>
          )}
          
          {datas3 && (
            <div className={HomeLayoutStyles.mainContainer}>
              <div className={HomeLayoutStyles.header}>
                <h1 className={HomeLayoutStyles.header1}>{header3}</h1>
              </div>
              <hr />
              {datas3 &&
                datas3.map((data) => (
                  <Link href={`/${link3}/${data.slug}/${data.id}`}>
                    <div className={HomeLayoutStyles.secondcontainer}>
                      <div className={HomeLayoutStyles.imageContainer}>
                        {data.image && (
                          <Image src={orig + data.image} alt="" layout="fill" />
                        )}
                      </div>
                      {/*  */}
                      <div className={HomeLayoutStyles.textContainer}>
                        <h4 className={HomeLayoutStyles.state}>Meghalaya </h4>
                        <h2 className={HomeLayoutStyles.title}>{data.title}</h2>

                        <p className={HomeLayoutStyles.posted}>
                          Posted{" "}
                          {moment
                            .utc(data.createdAt)
                            .local()
                            .startOf("second")
                            .fromNow()}
                          {/* <Moment >{data.createdAt} </Moment> */}
                          {/* Posted {data.createdAt && data.createdAt.split("T", 1)}  */}
                        </p>
                        {/* <button className={HomeLayoutStyles.button}>Read More</button> */}
                      </div>
                    </div>
                  </Link>
                ))}
                <Link href={link3}>
                  <div className={HomeLayoutStyles.browseAll}>Browse All</div>
                </Link>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
