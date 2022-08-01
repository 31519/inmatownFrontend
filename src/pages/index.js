import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScreenLayout from "../components/ScreenLayout";
import FooterLayout from "../components/FooterLayout";
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Link from "next/link";
import Head from "next/head";
// import { localListAction } from "../actions/advertiseActions";
import { localListAction } from "../redux/actions/advertiseActions";
import { advertiseListAction } from "../redux/actions/advertiseActions";
import { jobListAction } from "../redux/actions/advertiseActions2";
import { listTechs } from "../redux/actions/techActions";
import HomePageLayout from "../components/HomePageLayout";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";

export default function HomePage() {
  const dispatch = useDispatch();
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
    pages,
    page,
  } = advertiseList;

  const jobList = useSelector((state) => state.jobList);

  const {
    error: listJobError,
    loading: listJobLoading,
    jobs: listJob,
  } = jobList;


  const techList = useSelector((state) => state.techList);

  const {
    error: techListError,
    loading: techListLoading,
    techs: listTech,
  } = techList;

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch, ]);

  useEffect(() => {
    dispatch(listTechs());
  }, [dispatch]);
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="Home page of inmatown"></meta>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
        <title>Inmatown</title>
      </Head>
      <Banners />
      <IndexAdvertiseBanner index={0} />
      <Categories />
      <HomePageLayout  header1='News' header2="Education" header3="Jobs" datas1={listLocal.slice(0, 2)} datas2={listTech} datas3={listJob} link1='news' link2="educations" link3="jobs"/>
      <IndexAdvertiseBanner index={1} />

      {/* <ScreenLayout header1='News' header2="Advertise" datas={listLocal} datas2={listAdvertise} /> */}
      <FooterLayout />
    </div>
  );
}
