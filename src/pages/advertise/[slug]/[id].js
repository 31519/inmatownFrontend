import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import axios from "axios";
import ScreenLayoutDetail from "../../../components/ScreenLayoutDetail";
import HeaderLayout from "../../../components/HeaderLayout";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
import Banners from "../../../components/Banners";
import BbcComponent from "../../../components/BbcComponent";
import BbcText from "../../../components/BbcText";
import { getAdvertiseDetail } from "../../../../lib/backendLink";
import MainScreenComponent from "../../../components/MainScreenComponent";
import MainScreenDetailComponent from "../../../components/MainscreenDetailComponent";
import Categories from "../../../components/Categories";
import SideBar from "../../../components/SideBar";

// COMPONENT ALL

const AdvertiseDetail = ({ advertise }) => {
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
        title={advertise.title}
        description={advertise.content}
        ogTitle={advertise.title}
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + advertise.image}
      />
      <SideBar/>
      <Banners />
      <Categories />
      <MainScreenDetailComponent url={mainUrl} datas={advertise} header="Advertise" />

      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <BbcText datas={listJob} link="jobs" header="Recent Jobs" />
      <Banners />

      <MainScreenComponent datas={listLocal} header="Recent News" link="news" />
      <FooterLayout />
    </>
  );
};

export default AdvertiseDetail;

// export async function getServerSideProps({ params }) {
//   const advertiseApi = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/advertisement/list/${params.id}/${params.slug}/`
//   );
//   const advertiseData = advertiseApi.data;

//   return {
//     props: {
//       advertise: advertiseData,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  const advertiseApi = await getAdvertiseDetail(params);

  return {
    props: {
      advertise: advertiseApi,
    },
  };
}
