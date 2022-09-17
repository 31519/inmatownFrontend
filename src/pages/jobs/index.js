import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { localListAction } from "../../redux/actions/advertiseActions";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";

import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
import SideBar from "../../components/SideBar";
import Banners from "../../components/Banners";
import StaticBanner from "../../components/StaticBanner";
import Categories from "../../components/Categories";
import { getJobs } from "../../../lib/backendLink";
import BBCscreens from "../../components/BBCscreens";
import BbcComponent from "../../components/BbcComponent";
import BbcText from "../../components/BbcText";

// COMPONENT ALL

const Jobs = ({ jobs, count,resPerPage  }) => {
  const dispatch = useDispatch();
  const metaImage = "/inmatown.png";
  const router = useRouter();

  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

  const localList = useSelector((state) => state.localList);

  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
  } = localList;

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

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  return (
    <>
      <MetaScreen
        title="Inmatown - Recent Jobs"
        description="Inmatown - Recent Jobs"
        ogTitle="Inmatown - Recent Jobs"
        ogType="website"
        ogUrl={mainUrl + router.asPath}
        ogImage={metaImage}
      />
      <SideBar/>
      <StaticBanner />
      <Categories />
      <BBCscreens
        datas={jobs}
        header="Recent Jobs"
        link="jobs"
        count={count}
        resPerPage={resPerPage}
      />
      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <BbcText datas={jobs} link="jobs" header="Jobs" />
      <Banners />
      <FooterLayout />
    </>
  );
};

export default Jobs;

export async function getServerSideProps({query}) {
  const keyword = query.keyword || ""
  const page =  query.page || 1
  const queryStr = `keyword=${keyword}&page=${page}`

  const jobsApi = await getJobs(queryStr);

  const { resPerPage, count, jobs } = jobsApi;

  return {
    props: {
      jobs: jobs,
      resPerPage,
      count,
    },
  };
}
