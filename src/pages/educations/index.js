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
import SearchBox from "../../components/SearchBox";
// COMPONENT ALL



const Education = ({ education, page, pages }) => {

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
      <MetaScreen title="Inmatown - Education" description="Inmatown - Education" ogTitle="Inmatown - Education" ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}` + `${metaImage}`} />
      <HeaderLayout />
      <SearchBox/>
      <ScreenLayout  header1='Education' header2="Advertise" header3="Jobs" datas1={education}  pages={pages} page={page} datas2={listAdvertise} datas3={listJob} link1='educations' link2="advertise" link3="jobs"/>
      <FooterLayout/>
    </>
  );
};

export default Education;



export async function getServerSideProps({query}) {
  const keyword = query.keyword || ''
  const queryStr = `keyword=${keyword}`
  const educationApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/technology/list?${queryStr}`);
  const educationData = educationApi.data;
  const { pages, page, technology } = educationData;

  return {
    props: {
      education: technology,
      pages,
      page
    },
  };
}