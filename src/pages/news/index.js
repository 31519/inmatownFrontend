import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction, localListMainAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import { listTechs } from "../../redux/actions/techActions";

import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";

import MostView from "../../components/MostView";
import Pagination from "react-js-pagination";
import BBCscreens from "../../components/BBCscreens";
import BbcComponent from "../../components/BbcComponent";
import BbcText from "../../components/BbcText";
import Banners from "../../components/Banners";
import StaticBanner from "../../components/StaticBanner";
import SideBar from "../../components/SideBar";
import Categories from "../../components/Categories";
import { getNews } from "../../../lib/backendLink";
import graphqlApiBackend from "../../../lib/graphqlApiBackend";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// COMPONENT ALL

const News = () => {
  const router = useRouter();
  const keywords = router.query.keyword || "";
  const page = router.query.page || 1;
  const keyword = `keyword=${keywords}&page=${page}`;

  const dispatch = useDispatch();
  const metaImage = "/favicon.png";
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

  const techList = useSelector((state) => state.techList);

  const {
    error: techListError,
    loading: techListLoading,
    techs: newss,
  } = techList;


  const newsList = useSelector((state) => state.localListMain);

  const {
    error: mainNewsListError,
    loading: mainNewsListLoading,
    locals: news,
    count,
    resPerPage
  } = newsList;

  useEffect(() => {
    dispatch(localListMainAction(keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(jobListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listTechs());
  }, [dispatch]);

  return (
    <>
      <MetaScreen
        title="CRfeeds - Recent News"
        description="CRfeeds - Recent News"
        ogTitle="CRfeeds - Recent News"
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={metaImage}
      />
      <SideBar />
      <StaticBanner />
      <Categories />

      <BBCscreens datas={news} resPerPage={resPerPage} count={count} header="Recent News" link="news" />
      <BbcText datas={listJob} link="jobs" header="Jobs" />

      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <Banners />

      <FooterLayout />
    </>
  );
};

export default News;

// export async function getStaticProps({ query }) {
//   const keyword = query.keyword || "";
//   const page = query.page || "";

//   const queryStr = `keyword=${keyword}&page=${page}`;
//   const newsApi = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/localnews/list?${queryStr}`
//   );
//   const newsData = newsApi.data;
//   const { count, resPerPage, local } = newsData;

//   return {
//     props: {
//       news: local,
//       count: count,
//       resPerPage: resPerPage,
//     },
//   };
// }

// export async function getServerSideProps({query}) {

//   const keyword = query.keyword || ""
//   const page =  query.page || 1
//   const queryStr = `keyword=${keyword}&page=${page}`

//   const newsApi = await getNews(queryStr);

//   const { resPerPage, count, local } = newsApi;

//   return {
//     props: {
//       news: local,
//       resPerPage,
//       count,
//     },
//   };
// }

// export async function getServerSideProps() {
//   const client = new ApolloClient({
//     uri: "http://localhost:8000/graphql/",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query {
//         allNews {
//           edges {
//             node {
//               title
//               content
//               id
//               slug
//               image
//               createdAt
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       newsData: data.allNews.edges,
//     },
//   };
// }

// export async function getServerSideProps({ query }) {
//   const keyword = query.keyword || "";
//   const page = query.page || "";

//   const queryStr = `keyword=${keyword}&page=${page}`;
//   const newsApi = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/localnews/list?${queryStr}`
//   );
//   const newsData = newsApi.data;
//   const { count, resPerPage, local } = newsData;

//   return {
//     props: {
//       news: local,
//       count: count,
//       resPerPage: resPerPage,
//     },
//   };

// }
