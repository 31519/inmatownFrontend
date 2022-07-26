import React, { useEffect } from "react";
import axios from "axios";
import ScreenLayout from "../components/ScreenLayout";
import { useSelector, useDispatch } from "react-redux";

const HeadView = ({ newsComponent, advertiseList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("this is the best app")
  }, [dispatch]);

  console.log("news", newsComponent);
  console.log("advertise", advertiseList);
  return (
    <div>
      <ScreenLayout datas={newsComponent} />
      hey
    </div>
  );
};

export default HeadView;

export async function getServerSideProps() {
  const newsApi = await axios.get("http://localhost:8000/api/localnews/list/");
  const newsData = newsApi.data;
  console.log("local", newsData);
  const { pages, page, local } = newsData;

  const advertiseApi = await axios.get(
    "http://localhost:8000/api/advertisement/list/"
  );
  const advertiseData = advertiseApi.data;
  console.log("localData Again", advertiseData);

  return {
    props: {
      newsComponent: local,
      advertiseList: advertiseData,
    },
  };
}
