import bbcText from "../styles/BbcText.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

const BbcText = ({ datas, header, link }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  return (
    <Grid container className={bbcText.mainContainer}>
      <div className={bbcText.header}>
        <h1 className={bbcText.header1}>{header}</h1>
        <hr />
      </div>

      {datas &&
        datas.slice(0, 7).map((data, index) => (
          <Link href={`/${link}/${data.slug}/${data.id}`}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={bbcText.container}
            >
              <div className={bbcText.indexContainer}>
                <h1 className={bbcText.indexNumber}>{index + 1}</h1>
              </div>
              <div className={bbcText.arrowLeft}></div>
              <div className={bbcText.textContainer}>
                <p className={bbcText.posted}>
                  Posted{" "}
                  {moment
                    .utc(data.createdAt)
                    .local()
                    .startOf("second")
                    .fromNow()}
                </p>
                <h2 className={bbcText.title}>{data.title}</h2>
                {/* <button className={bbcText.button}>Read More</button> */}
              </div>
            </Grid>
          </Link>
        ))}
    </Grid>
  );
};

export default BbcText;
