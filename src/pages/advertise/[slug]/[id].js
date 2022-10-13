import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenLayoutDetail from "../../../components/ScreenLayoutDetail";
import HeaderLayout from "../../../components/HeaderLayout";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import Banners from "../../../components/Banners";
import StaticBanner from "../../../components/StaticBanner";
import BbcComponent from "../../../components/BbcComponent";
import BbcText from "../../../components/BbcText";
import { getAdvertiseDetail } from "../../../../lib/backendLink";
import MainScreenComponent from "../../../components/MainScreenComponent";
import MainScreenDetailComponent from "../../../components/MainscreenDetailComponent";
import Categories from "../../../components/Categories";
import SideBar from "../../../components/SideBar";
import { getAdvertise } from "../../../../lib/backendLink";
import { advertiseDetailAction } from "../../../redux/actions/advertiseActions";
import SideviewOne from "../../../components/sideviewone/SideviewOne";
import Detail from "../../../components/detailpage/Detail";

// COMPONENT ALL

const jobsImage = "/static/jobs.jpg"
const newsImage = "/static/news.jpg"
const advetiseImage = "/static/advertisement.jpg"
const educationImage = "/static/education.jpg"

const AdvertiseDetail = () => {
  const router = useRouter();
  const {slug, id} = router.query
  const dispatch = useDispatch();
  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

  const advertiseDetail = useSelector((state) => state.advertiseDetail);

  const {
    error: detailAdvertiseError,
    loading: detailAdvertiseLoading,
    advertise: advertise,
  } = advertiseDetail;

  useEffect(() => {
    dispatch(advertiseDetailAction(id, slug));
  }, [dispatch, id, slug]);

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

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
    pages,
    page,
  } = localList;

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch, id, slug]);

  return (
    <>
    {advertise && (

      <MetaDetail
        title={advertise.title}
        description={advertise.metadesc}
        ogTitle={advertise.title}
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + advertise.image}
      />
    )}
      <SideBar/>
      <StaticBanner />
      <Categories />
      {/* # 2ND HEADER */}
      <Grid container>
        <Grid items lg={8} md={12} sm={12} xs={12}>
          <Detail datas={advertise} header="Advertisement" link="advertise" url={mainUrl} defaultImage={advetiseImage} />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12}>
          <SideviewOne datas={listLocal} header="News" link="news" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}

      <Grid container>
        <Grid items lg={8} md={8} sm={12} xs={12}>
          <MainScreenComponent
            datas={listJob}
            header="Recent Jobs"
            link="jobs"
            staticImg={jobsImage}
          />
        </Grid>
      </Grid>

      {/* <MainScreenDetailComponent url={mainUrl} link="advertise" datas={advertise} header="Advertise" />

      <BbcText datas={listJob} link="jobs" header="Recent Jobs" />

      <Banners />

      <MainScreenComponent datas={listLocal} header="Recent News" link="news" /> */}
      <FooterLayout />
    </>
  );
};

export default AdvertiseDetail;

// export async function getServerSideProps({ params }) {
//   const advertiseApi = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/advertisement/list/${params.id}/${params.slug}/`
//   );
//   const advertiseData = advertiseApi.data;

//   return {
//     props: {
//       advertise: advertiseData,
//     },
//   };
// }

// export async function getStaticProps({ params }) {
//   const advertiseApi = await getAdvertiseDetail(params);

//   return {
//     props: {
//       advertise: advertiseApi,
//     },
//     revalidate: 10,
//   };
// }

// export const  getStaticPaths = async() => {
//   const advertiseApi = await getAdvertise();
//   const { resPerPage, count, advertisement } = advertiseApi;

//   return {
//       paths: advertisement.map((advertise) => ({
//         params: { slug:advertise.slug, id:advertise.id.toString() }
//       })),
       
//       fallback: 'blocking'
//   }
// }