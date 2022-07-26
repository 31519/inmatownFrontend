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




const AdvertiseDetail = ({ advertise }) => {

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
      <MetaDetail title={advertise.title} description={advertise.content} ogTitle={advertise.title} ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + advertise.image}/>
      <HeaderLayout />
      <ScreenLayoutDetail url={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}  header1='News' header2="Advertise" header3="Jobs" datas1={advertise} datas2={listLocal} datas3={listJob} link2='news' link3="jobs" />
      <FooterLayout/>
    </>
  );
};

export default AdvertiseDetail;



export async function getServerSideProps({params}) {

  const advertiseApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/advertisement/list/${params.id}/${params.slug}/`);
  const advertiseData = advertiseApi.data;


  return {
    props: {
      advertise: advertiseData,
    },
  };
}

