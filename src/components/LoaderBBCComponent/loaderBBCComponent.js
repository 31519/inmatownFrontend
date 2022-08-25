import bbcStyle from "./LoaderBbcComponent.module.css";
import moment from "moment";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import Index from "../../../data/index.json";

const LoaderBbcComponent = () => {
  return (
    <Grid container className={bbcStyle.mainContainer}>
      <div className={bbcStyle.header}>
        <hr />
      </div>

      {Index.map((data, index) => (
        <div className={index == 0 ? bbcStyle.container0 : bbcStyle.container}>
          <div
            className={
              index == 0 ? bbcStyle.imageContianer0 : bbcStyle.imageContianer
            }
          ></div>
          <div
            className={
              index == 0 ? bbcStyle.textContainer0 : bbcStyle.textContainer
            }
          ></div>
        </div>
      ))}
    </Grid>
  );
};

export default LoaderBbcComponent;
