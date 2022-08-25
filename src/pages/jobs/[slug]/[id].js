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
// COMPONENT ALL




const AdvertiseDetail = ({ jobs }) => {

  const router = useRouter()
  const dispatch = useDispatch();


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
    <MetaDetail title={jobs.title} description={jobs.content} ogTitle={jobs.title} ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + jobs.image}/>
      <Categories/>
      <HeaderLayout />
      <ScreenJobsLayoutDetail  url={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} header1='Jobs' header2="News" header3="Advertise" datas1={jobs} datas2={listLocal} datas3={listAdvertise} link2='news' link3="advertise" />
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

