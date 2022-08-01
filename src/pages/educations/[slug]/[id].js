import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions"
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenLayoutDetail from "../../../components/ScreenLayoutDetail";
import HeaderLayout from "../../../components/HeaderLayout";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
// COMPONENT ALL




const EducationDetail = ({ education }) => {

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
    <MetaDetail title={education.title} description={education.content} ogTitle={education.title} ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + education.image}/>
    
      <HeaderLayout />
      <ScreenLayoutDetail url={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}  header1='Education' header2="Advertise" header3="Jobs" datas1={education} datas2={listAdvertise} datas3={listJob} link2='advertise' link3="jobs" />
      <FooterLayout/>
    </>
  );
};

export default EducationDetail;



export async function getServerSideProps({params}) {

  const educationApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/technology/list/${params.id}/${params.slug}/`);
  const educationData = educationApi.data;

  return {
    props: {
      education: educationData,
    },
  };
}

