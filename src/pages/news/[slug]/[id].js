import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import SideBar from "../../../components/SideBar";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import Banners from "../../../components/Banners";
import BbcComponent from "../../../components/BbcComponent";
import BbcText from "../../../components/BbcText";
import { getNewsDetail } from "../../../../lib/backendLink";
import MainScreenComponent from "../../../components/MainScreenComponent";
import MainScreenDetailComponent from "../../../components/MainscreenDetailComponent";
import Categories from "../../../components/Categories";

// COMPONENT ALL

const NewsDetail = ({ news }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

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
        title={news.title}
        description={news.content}
        ogTitle={news.title}
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + news.image}
      />
      <SideBar/>
      <Banners />
      <Categories />
      <MainScreenDetailComponent url={mainUrl} datas={news} header="News" />

      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <BbcText datas={listJob} link="jobs" header="Recent Jobs" />
      <Banners />

      <MainScreenComponent datas={listJob} header="Recent Jobs" link="jobs" />
      <FooterLayout />
    </>
  );
};

export default NewsDetail;

// export async function getServerSideProps({ params }) {
//   const newsApi = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/localnews/list/${params.id}/${params.slug}/`
//   );
//   const newsData = newsApi.data;

//   return {
//     props: {
//       news: newsData,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  const newsApi = await getNewsDetail(params);

  return {
    props: {
      news: newsApi,
    },
  };
}
