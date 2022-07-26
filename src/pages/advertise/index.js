import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { localListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenLayout from "../../components/ScreenLayout";
import HeaderLayout from "../../components/HeaderLayout";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
// COMPONENT ALL


const Advertise = ({ advertise, page, pages }) => {

  const dispatch = useDispatch();
  const metaImage = "/inmatown.png"
  const router = useRouter()
  // const URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL

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
  } = localList;

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch,]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch, ]);

  return (
    <>
    <MetaScreen title="Inmatown - Recent News" description="Inmatown - Recent News" ogTitle="Inmatown - Recent News" ogType="website"   ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}` + `${metaImage}`} />
      <HeaderLayout />
      <ScreenLayout  header1='Advertise' header2="News" header3="Jobs" datas1={advertise}  pages={pages} page={page} datas2={listLocal} datas3={listJob}  link1='advertise' link2="news" link3="jobs"/>
      <FooterLayout/>
    </>
  );
};

export default Advertise;




export async function getServerSideProps() {
  const advertiseApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/advertisement/list/`);
  const advertiseData = advertiseApi.data;
  const { pages, page, advertise } = advertiseData;

  return {
    props: {
      advertise: advertise,
      pages,
      page
    },
  };
}
