import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import {
  jobListAction,
  jobDetailAction,
} from "../../../redux/actions/advertiseActions2";
import SideBar from "../../../components/SideBar";
import { getJobs } from "../../../../lib/backendLink";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import Categories from "../../../components/Categories";
import MainScreenComponent from "../../../components/MainScreenComponent";
import MainscreenJobsDetailComponent from "../../../components/MainscreenJobsDetailComponent";
// COMPONENT ALL
import { Grid } from "@mui/material";
import Banners from "../../../components/Banners";
import StaticBanner from "../../../components/StaticBanner";
import BbcComponent from "../../../components/BbcComponent";
import BbcText from "../../../components/BbcText";
import { listTechs } from "../../../redux/actions/techActions";
import { getJobsDetail } from "../../../../lib/backendLink";
import SideviewOne from "../../../components/sideviewone/SideviewOne";
import Detail from "../../../components/detailpage/Detail";


const jobsImage = "/static/jobs.jpg"
const newsImage = "/static/news.jpg"
const advetiseImage = "/static/advertisement.jpg"
const educationImage = "/static/education.jpg"

const AdvertiseDetail = () => {
  const router = useRouter();
  const { slug, id } = router.query;
  const dispatch = useDispatch();

  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

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

  const jobDetail = useSelector((state) => state.jobDetail);

  const {
    error: detailJobError,
    loading: detailJobLoading,
    job: jobs,
  } = jobDetail;

  const techList = useSelector((state) => state.techList);

  const {
    error: techListError,
    loading: techListLoading,
    techs: education,
  } = techList;

  useEffect(() => {
    dispatch(listTechs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobDetailAction(id, slug));
  }, [dispatch, id, slug]);

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch]);

  return (
    <>
      {jobs && (
        <MetaDetail
          title={jobs.title}
          description={jobs.metadesc}
          ogTitle={jobs.title}
          ogType="website"
          ogUrl={mainUrl + router.asPath}
          ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + jobs.image}
        />
      )}

      <SideBar />
      <StaticBanner />
      <Categories />

      {/* # 2ND HEADER */}
      <Grid container>
        <Grid items lg={8} md={12} sm={12} xs={12}>
          <Detail datas={jobs} header="Jobs" link="jobs" url={mainUrl} defaultImage={jobsImage}/>
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12}>
          <SideviewOne datas={listLocal} header="News" link="news" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}
      {/* <MainscreenJobsDetailComponent url="jobs" datas={jobs} header="Jobs" />

      <BbcText datas={listLocal} link="news" header="Recent News" />

      <Banners />
      <MainScreenComponent datas={listJob} header="Recent Jobs" link="jobs" /> */}
      <Grid container>
        <Grid items lg={8} md={8} sm={12} xs={12}>
          <MainScreenComponent
            datas={education}
            header="Recent Education"
            link="educations"
            staticImg={educationImage}
          />
        </Grid>
      </Grid>
      <FooterLayout />
    </>
  );
};

export default AdvertiseDetail;

// export async function getStaticProps({ params }) {
//   const jobsDetailApi = await getJobsDetail(params);

//   return {
//     props: {
//       jobs: jobsDetailApi,
//     },
//     revalidate: 10,
//   };
// }

// export const  getStaticPaths = async() => {
//   const jobsDetailApi = await getJobs();
//   const { resPerPage, count, jobs } = jobsDetailApi;

//   return {
//       paths: jobs.map((job) => ({
//         params: { slug:job.slug, id:job.id.toString() }
//       })),

//       fallback: 'blocking'
//   }
// }
