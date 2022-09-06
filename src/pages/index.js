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
import BbcComponent from "../components/BbcComponent";
import BbcText from "../components/BbcText";
import SideBar from "../components/SideBar";
import listCategory from "../../data/category.json"


export async function getStaticProps(context) {
  const category =  listCategory 
  console.log("category", category)

  // const listCategory = [
  //   {
  //     title: "Home",
  //     link: "/",
  //     image: "/tourisms.jpg",
  //   },
  //   {
  //     title: "Education",
  //     link: "/educations",
  //     image: "/education.jpg",
  //   },
  
  //   {
  //     title: "News",
  //     link: "/news",
  //     image: "/news.jpg",
  //   },
  //   {
  //     title: "Jobs",
  //     link: "/jobs",
  //     image: "/jobs.jpg",
  //   },
  //   {
  //     title: "Advertise",
  //     link: "/advertise",
  //     image: "/advertise.jpg",
  //   },
  // ];

  return {
    props: {
      category:category
    }
  }
}


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
      <SideBar/>


      {/* <IndexAdvertiseBanner index={0} /> */}
      {/* <HomePageLayout  header1='News' header2="Education" header3="Jobs" datas1={listLocal.slice(0, 2)} datas2={listTech} datas3={listJob} link1='news' link2="educations" link3="jobs"/> */}
      <Banners />
      <Categories />
      <BbcComponent  datas={listLocal} link="news" header="Recent News" loading={listLocalLoading}/>
      <BbcText  datas={listLocal} link="news" header="Must Read"/>

      <BbcComponent  datas={listJob} link="jobs" header="Recent Jobs" loading={listJobLoading}/>
      <BbcText  datas={listJob} link="jobs" header="Must Read"/>
      <Banners />
      <BbcComponent  datas={listTech} link="educations" header="Education" loading={listTech}/>
      <BbcText  datas={listTech} link="educations" header="Must Read"/>
      <Banners />
      
      <IndexAdvertiseBanner index={1} />

      {/* <ScreenLayout header1='News' header2="Advertise" datas={listLocal} datas2={listAdvertise} /> */}
      <FooterLayout />
    </div>
  );
}
