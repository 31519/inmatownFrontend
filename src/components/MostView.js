import mostView from "../styles/MostView.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import {
    Grid
} from '@mui/material'


const MostView = ({ datas, header, link, }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;



  return (
    <Grid container className={mostView.mainContainer}>
      <div className={mostView.header}>
        <h1 className={mostView.header1}>{header}</h1>
        <hr/>
      </div>
      
      {datas &&
        datas.slice(0,4).map((data) => (
          <Link href={`/${link}/${data.slug}/${data.id}`}>
            <div className={mostView.container}>

              <div className={mostView.imageContainer}>
                {data.image && (
                  <img
                    className={mostView.image}
                    src={orig + data.image}
                    alt=""
                    layout="fill"
                  />
                )}
              </div>
              <div className={mostView.textContainer}>

                <h2 className={mostView.title}>{data.title}</h2>
                <button className={mostView.button}>Read More</button>
              </div>
            </div>
          </Link>
        ))}


    </Grid>
  );
};

export default MostView;
