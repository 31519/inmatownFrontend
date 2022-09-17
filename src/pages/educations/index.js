import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
import Banners from "../../components/Banners";
import StaticBanner from "../../components/StaticBanner";
import Categories from "../../components/Categories";
import { getEducations } from "../../../lib/backendLink";
import BBCscreens from "../../components/BBCscreens";
import BbcComponent from "../../components/BbcComponent";
import BbcText from "../../components/BbcText";
import SideBar from "../../components/SideBar";
// COMPONENT ALL

const Education = ({ education, count, resPerPage }) => {
  const dispatch = useDispatch();
  const metaImage = "/inmatown.png";
  const router = useRouter();
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
  }, [dispatch]);

  return (
    <>
      <MetaScreen
        title="Inmatown - Education"
        description="Inmatown - Education"
        ogTitle="Inmatown - Education"
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={metaImage}
      />
      <SideBar/>
      <StaticBanner />
      <Categories />
      <BBCscreens
        datas={education}
        header="Education"
        link="educations"
        count={count}
        resPerPage={resPerPage}
      />
      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <BbcText datas={listJob} link="jobs" header="Jobs" />
      <Banners />
      <FooterLayout />
    </>
  );
};

export default Education;

// export async function getServerSideProps({query}) {
//   const keyword = query.keyword || ''
//   const queryStr = `keyword=${keyword}`
//   const educationApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/technology/list?${queryStr}`);
//   const educationData = educationApi.data;
//   const { pages, page, technology } = educationData;

//   return {
//     props: {
//       education: technology,
//       pages,
//       page
//     },
//   };
// }

export async function getServerSideProps({query}) {

  const keyword = query.keyword || ""
  const page =  query.page || 1
  const queryStr = `keyword=${keyword}&page=${page}`


  const educationApi = await getEducations(queryStr);

  const { resPerPage, count, technology } = educationApi;

  return {
    props: {
      education: technology,
      resPerPage,
      count
    },
  };
}

