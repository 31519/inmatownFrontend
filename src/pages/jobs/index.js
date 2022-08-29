import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { localListAction } from "../../redux/actions/advertiseActions";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenLayout from "../../components/ScreenLayout";
import HeaderLayout from "../../components/HeaderLayout";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
import MostView from "../../components/MostView";
import Banners from "../../components/Banners";
import Categories from "../../components/Categories";
import { getJobs} from "../../../lib/backendLink";
import BBCscreens from "../../components/BBCscreens"
import BbcComponent from "../../components/BbcComponent"
import BbcText from "../../components/BbcText";


// COMPONENT ALL


const Jobs = ({ jobs, page, pages, category }) => {

  const dispatch = useDispatch();
  const metaImage = "/inmatown.png"
  const router = useRouter()

  
  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL

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
  }, [dispatch, ]);

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch,]);

    
  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);



  return (
    <>
      <MetaScreen title="Inmatown - Recent Jobs" description="Inmatown - Recent Jobs" ogTitle="Inmatown - Recent Jobs" ogType="website" ogUrl={mainUrl + router.asPath} ogImage={metaImage} />
      <Banners/>
      <Categories />
      {/* <ScreenLayout  header1='Jobs' header2="News" header3="Advertise" datas1={jobs}  pages={pages} page={page} datas2={listLocal} datas3={listAdvertise}  link1='jobs' link2="news" link3="advertise"/> */}
      <BBCscreens datas={jobs}  header="Recent Jobs" link="jobs" count={pages} resPerPage={page} />
      <BbcComponent  datas={listJob} link="jobs" header="Must View" loading={listJobLoading}/>
      {/* <MostView  header='Jobs'   datas={jobs}  link="jobs"/> */}
      <BbcText  datas={jobs} link="jobs" header="Jobs"/>
      <Banners/>
      <FooterLayout/>
    </>
  );
};

export default Jobs;




export async function getServerSideProps() {

  const jobsApi = await getJobs();

  const { pages, page, jobs } = jobsApi;

  return {
    props: {
      jobs: jobs,
      pages,
      page
    },

  };
}
