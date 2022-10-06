import bbcStyle from "../styles/bbcStyle.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import LoaderBbcComponent from "./LoaderBBCComponent/loaderBBCComponent";

const BbcComponent = ({
  datas,
  header,
  link,
  staticImg = "/jobs.jpg",
  loading = false,
}) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  return (
    <Grid container className={bbcStyle.mainContainer}>
      <div className={bbcStyle.header}>
        <h1 className={bbcStyle.header1}>{header}</h1>
        <hr />
      </div>
      {datas.length === 0 && <LoaderBbcComponent datas={datas} />}
      {/* <LoaderBbcComponent/> */}

      {datas &&
        datas.slice(0, 6).map((data, index) => (
          <Link href={`/${link}/${data.slug}/${data.id}`}>
            {/* <Grid item container xs={12} sm={6}  md={4} lg={`${index == 0 ? 6: 3}`} className={bbcStyle.container}> */}
            <div
              className={index == 0 ? bbcStyle.container0 : bbcStyle.container}
            >
              <div
                className={
                  index == 0
                    ? bbcStyle.imageContianer0
                    : bbcStyle.imageContianer
                }
              >
                {data.image ? (
                  <img
                    className={index == 0 ? bbcStyle.image0 : bbcStyle.image}
                    src={orig + data.image}
                    alt=""
                    layout="fill"
                  />
                ) : (
                  <img
                    className={index == 0 ? bbcStyle.image0 : bbcStyle.image}
                    src={staticImg}
                    alt=""
                    layout="fill"
                  />
                )}
              </div>
              <div
                className={
                  index == 0 ? bbcStyle.textContainer0 : bbcStyle.textContainer
                }
              >
                {/* <div className={bbcStyle.textDiv} > */}
                <p className={bbcStyle.posted}>
                  Posted{" "}
                  {moment
                    .utc(data.createdAt)
                    .local()
                    .startOf("second")
                    .fromNow()}
                </p>

                <h2 className={bbcStyle.title}>{data.title.slice(0, 100)}...</h2>
                <button className={bbcStyle.button}>Read More</button>
                {/* </div> */}
              </div>
            </div>
          </Link>
        ))}

      <div className={bbcStyle.browseAll}>
        <Link href={link}>
          <p className={bbcStyle.browseAllText}>Browse all...</p>
        </Link>
      </div>
    </Grid>
  );
};

export default BbcComponent;
