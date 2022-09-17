import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import SideBar from "../../../components/SideBar";

import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import Categories from "../../../components/Categories";
import MainScreenComponent from "../../../components/MainScreenComponent"
import MainscreenJobsDetailComponent from "../../../components/MainscreenJobsDetailComponent";
// COMPONENT ALL
import Banners from "../../../components/Banners";
import StaticBanner from "../../../components/StaticBanner";
import BbcComponent from "../../../components/BbcComponent";
import BbcText from "../../../components/BbcText";
import { getJobsDetail } from "../../../../lib/backendLink";

const AdvertiseDetail = ({ jobs }) => {
  const router = useRouter();
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
      <MetaDetail
        title={jobs.title}
        description={jobs.content}
        ogTitle={jobs.title}
        ogType="website"
        ogUrl={mainUrl + router.asPath}
        ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + jobs.image}
      />
      {/* <link
        itemprop="thumbnailUrl"
        href={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + jobs.image}
      />

      <span itemprop="image" itemscope itemtype="image/jpeg">
        <link
          itemprop="url"
          href={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + jobs.image}
        />
      </span> */}
      <SideBar/>
      <StaticBanner />
      <Categories />
      <MainscreenJobsDetailComponent url="jobs" datas={jobs} header="Jobs" />

      <BbcText datas={listLocal} link="news" header="Recent News" />
      
      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <Banners />
      <MainScreenComponent datas={listJob} header="Recent Jobs" link="jobs"/>
      <FooterLayout />
    </>
  );
};

export default AdvertiseDetail;

export async function getServerSideProps({ params }) {
  const jobsDetailApi = await getJobsDetail(params);

  return {
    props: {
      jobs: jobsDetailApi,
    },
  };
}
