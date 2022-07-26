import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenLayout from "../../components/ScreenLayout";
import HeaderLayout from "../../components/HeaderLayout";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
// COMPONENT ALL



const News = ({ news, page, pages }) => {

  const dispatch = useDispatch();
  const metaImage = "/inmatown.png"
  const router = useRouter()
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
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch, ]);

  return (
    <>
      <MetaScreen title="Inmatown - Recent News" description="Inmatown - Recent News" ogTitle="Inmatown - Recent News" ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}` + `${metaImage}`} />
      <HeaderLayout />
      <ScreenLayout  header1='News' header2="Advertise" header3="Jobs" datas1={news}  pages={pages} page={page} datas2={listAdvertise} datas3={listJob} link1='news' link2="advertise" link3="jobs"/>
      <FooterLayout/>
    </>
  );
};

export default News;



export async function getServerSideProps() {
  const newsApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/localnews/list/`);
  const newsData = newsApi.data;
  const { pages, page, local } = newsData;

  return {
    props: {
      news: local,
      pages,
      page
    },
  };
}
