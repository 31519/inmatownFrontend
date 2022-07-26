import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { localListAction } from "../../redux/actions/advertiseActions";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
import axios from "axios";
import ScreenLayout from "../../components/ScreenLayout";
import HeaderLayout from "../../components/HeaderLayout";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
// COMPONENT ALL


const Jobs = ({ jobs, page, pages }) => {

  const dispatch = useDispatch();
  const metaImage = "/inmatown.png"
  const router = useRouter()
  // const URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL

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

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch,]);

    
  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);



  return (
    <>
      <MetaScreen title="Inmatown - Recent Jobs" description="Inmatown - Recent Jobs" ogTitle="Inmatown - Recent Jobs" ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}` + `${metaImage}`} />
      <HeaderLayout />
      <ScreenLayout  header1='Jobs' header2="News" header3="Advertise" datas1={jobs}  pages={pages} page={page} datas2={listLocal} datas3={listAdvertise}  link1='jobs' link2="news" link3="advertise"/>
      <FooterLayout/>
    </>
  );
};

export default Jobs;




export async function getServerSideProps() {
  const jobsApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/jobs/list/`);
  const jobsData = jobsApi.data;
  const { pages, page, jobs } = jobsData;

  return {
    props: {
      jobs: jobs,
      pages,
      page
    },
  };
}
