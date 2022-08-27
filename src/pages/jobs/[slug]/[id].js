import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions"
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenJobsLayoutDetail from "../../../components/ScreenJobsLayoutDetail";
import HeaderLayout from "../../../components/HeaderLayout";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import  Categories from "../../../components/Categories";

import MainscreenJobsDetailComponent from "../../../components/MainscreenJobsDetailComponent"
import MainScreenComponent from "../../../components/MainScreenComponent"
// COMPONENT ALL




const AdvertiseDetail = ({ jobs }) => {

  const router = useRouter()
  const dispatch = useDispatch();

  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL


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
  }, [dispatch,]);
    
  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch, ]);

  return (
    <>
    <MetaDetail title={jobs.title} description={jobs.content} ogTitle={jobs.title} ogType="website" ogUrl={mainUrl + router.asPath} ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + jobs.image}/>
      <Categories/>
      <MainscreenJobsDetailComponent url={mainUrl} datas={jobs} header="Jobs"/>
      
      <FooterLayout/>
    </>
  );
};

export default AdvertiseDetail;



export async function getServerSideProps({params}) {

  const jobsApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/jobs/list/${params.id}/${params.slug}/`);
  const jobsData = jobsApi.data;


  return {
    props: {
      jobs: jobsData,
    },
  };
}

