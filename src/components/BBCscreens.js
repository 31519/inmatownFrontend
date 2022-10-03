import mainScreen1 from "../styles/BbcScreens.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { Grid } from "@mui/material";
import ImageComponent from "./ImageComponent";
import LoaderBbcComponent from "./LoaderBBCComponent/loaderBBCComponent";
import MyPagination from "./MyPagination";
import SearchBox from "./SearchBox";

const imageUrl = "http://localhost:8000/images/";

const BBCscreens = ({
  datas,
  header,
  link,
  count,
  staticImg = "/jobs.jpg",
  resPerPage,
}) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const router = useRouter();
  


  return (
    <>
      <SearchBox />
      <Grid container className={mainScreen1.mainContainer}>
        <div className={mainScreen1.header}>
          <h1 className={mainScreen1.header1}>{header}</h1>
          <hr />
        </div>
        {datas && datas.length === 0 && <LoaderBbcComponent datas={datas} />}
        {/* <hr /> */}
        {datas &&
          datas.map((data, index) => (
            <Link href={`/${link}/${data.slug}/${data.id}`}>
              <div className={mainScreen1.container}>
                <div className={mainScreen1.stateBox}>
                  <h2 className={mainScreen1.brand} variant="p">
                    Inmatown
                  </h2>
                </div>
                <div className={mainScreen1.imageContainer}>
                  {data.image ? (
                    <Image
                      className={
                        index == 0 ? mainScreen1.image0 : mainScreen1.image
                      }
                      src={orig + data.image}
                      key={data.id}
                      alt=""
                      layout="fill"
                    />
                  ) : (
                    <Image
                      className={
                        index == 0 ? mainScreen1.image0 : mainScreen1.image
                      }
                      src={staticImg}
                      alt=""
                      layout="fill"
                    />
                  )}
                </div>
                
                
                
                {/*  */}
                <div className={mainScreen1.textContainer}>
                  <p className={mainScreen1.posted}>
                    Posted{" "}
                    {moment
                      .utc(data.createdAt)
                      .local()
                      .startOf("second")
                      .fromNow()}
                  </p>
                  {/* <h4 className={mainScreen1.state}>Meghalaya </h4> */}
                  <h2 className={mainScreen1.title}>{data.title}</h2>
                  {/* {data.content && (
                    <pre  className={mainScreen1.content}>
                      {parse(data.content.slice(0, 70))}<span>...</span>
                      </pre>
                  )} */}
                  <h2 className={mainScreen1.content}>
                    {data.content.slice(3, 70)}....
                  </h2>

                  <button className={mainScreen1.button}>Read More</button>
                </div>
              </div>
            </Link>
          ))}
      </Grid>

      <MyPagination resPerPage={resPerPage} count={count} />
    </>
  );
};

export default BBCscreens;
