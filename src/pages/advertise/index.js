import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { localListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
// COMPONENT ALL
import BBCscreens from "../../components/BBCscreens";
import BbcComponent from "../../components/BbcComponent";
import BbcText from "../../components/BbcText";
import Banners from "../../components/Banners";
import StaticBanner from "../../components/StaticBanner";
import Categories from "../../components/Categories";
import SideBar from "../../components/SideBar";
import { getAdvertise } from "../../../lib/backendLink";

const Advertise = ({ advertise, page, pages }) => {
  const dispatch = useDispatch();
  const metaImage = "/inmatown.png";
  const router = useRouter();
  // const URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL

  const jobList = useSelector((state) => state.jobList);

  const {
    error: listJobError,
    loading: listJobLoading,
    jobs: listJob,
  } = jobList;

  const localList = useSelector((state) => state.localList);

  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
  } = localList;

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch]);

  return (
    <>
      <MetaScreen
        title="Inmatown - Recent Advertise"
        description="Inmatown - Recent Advertise"
        ogTitle="Inmatown - Recent Advertise"
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}` + `${metaImage}`}
      />
      <SideBar/>
      <StaticBanner />
      <Categories />
      <BBCscreens
        datas={advertise}
        header="Recent Advertise"
        link="advertise"
        count={pages}
        resPerPage={page}
      />
      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <BbcText datas={listLocal} link="news" header="News" />
      <Banners />

      <FooterLayout />
    </>
  );
};

export default Advertise;

// export async function getServerSideProps({query}) {

//   const keyword = query.keyword || ''
//   const queryStr = `keyword=${keyword}`

//   const advertiseApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/advertisement/list?${queryStr}`);
//   const advertiseData = advertiseApi.data;
//   const { pages, page, advertise } = advertiseData;

//   return {
//     props: {
//       advertise: advertise,
//       pages,
//       page
//     },
//   };
// }

export async function getServerSideProps() {
  const advertiseApi = await getAdvertise();

  const { pages, page, advertise } = advertiseApi;

  return {
    props: {
      advertise: advertise,
      pages,
      page,
    },
  };
}
