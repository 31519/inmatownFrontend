import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import { getEducations } from "../../../../lib/backendLink";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import { techDetailAction } from "../../../redux/actions/techActions";
// COMPONENT ALL

import Categories from "../../../components/Categories";
import Banners from "../../../components/Banners";
import StaticBanner from "../../../components/StaticBanner";
import BbcComponent from "../../../components/BbcComponent";
import BbcText from "../../../components/BbcText";
import MainScreenComponent from "../../../components/MainScreenComponent";
import { getEducationDetail } from "../../../../lib/backendLink";
import MainScreenDetailComponent from "../../../components/MainscreenDetailComponent";
import SideBar from "../../../components/SideBar";

const EducationDetail = () => {
  const router = useRouter();
  const {slug, id} = router.query
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


  const techDet = useSelector((state) => state.techDetail);

  const {
    error: techListError,
    loading: techListLoading,
    tech: education,
  } = techDet;

  useEffect(() => {
    dispatch(techDetailAction(id, slug));
  }, [dispatch, id, slug]);

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch]);

  return (
    <>
       <MetaDetail
        title={education.title}
        description={education.metadesc}
        ogTitle={education.title}
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + education.image}
      /> 
      <SideBar/>
      <StaticBanner />
      <Categories />
      <MainScreenDetailComponent url={mainUrl} link="educations" datas={education} header="Education" />

      <BbcText datas={listJob} link="jobs" header="Recent Jobs" />
      
      {/* <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      /> */}
      <Banners />

      <MainScreenComponent datas={listJob} header="Recent Jobs" link="jobs" />

      <FooterLayout />
    </>
  );
};

export default EducationDetail;

// export async function getServerSideProps({params}) {

//   const educationApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/technology/list/${params.id}/${params.slug}/`);
//   const educationData = educationApi.data;

//   return {
//     props: {
//       education: educationData,
//     },
//   };
// }


// export async function getStaticProps({ params }) {
//   const educationApi = await getEducationDetail(params);

//   return {
//     props: {
//       education: educationApi,
//     },
//     revalidate: 10,
//   };
// }




// export const  getStaticPaths = async() => {
//   const educationApi = await getEducations();
//   const { pages, page, technology } = educationApi;

//   return {
//       paths: technology.map((education) => ({
//         params: { slug:education.slug, id:education.id.toString() }
//       })),
       
//       fallback: 'blocking'
//   }
// }
