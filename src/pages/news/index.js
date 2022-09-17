import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
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

const News = ({ news, resPerPage, count }) => {
  // const initialState = news;
  // const [news, setNews] = useState('');

  // console.log("initialState", initialState)
  // console.log("initialState2", newsss)

  const router = useRouter();

  let queryParams;
  if (typeof window != "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  const handlePageClick = (currentPage) => {
    if (queryParams.has("page")) {
      queryParams.set("page", currentPage);
    } else {
      queryParams.append("page", currentPage);
    }
    router.push({
      search: queryParams.toString(),
    });
  };

  const dispatch = useDispatch();
  const metaImage = "/inmatown.png";
  // const router = useRouter()
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
        title="Inmatown - Recent News"
        description="Inmatown - Recent News"
        ogTitle="Inmatown - Recent News"
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={metaImage}
      />
      <SideBar  />
      <StaticBanner />
      <Categories />
      
      <BBCscreens datas={news} resPerPage={resPerPage} count={count} header="Recent News" link="news" />
      <BbcComponent
        datas={listJob}
        link="jobs"
        header="Must View"
        loading={listJobLoading}
      />
      <BbcText datas={listJob} link="jobs" header="Jobs" />
      <Banners />

      {/* <SearchBox/> */}
      {/* <ScreenLayout  header1='News' header2="Education" header3="Jobs" datas1={news}  count={count} resPerPage={resPerPage} datas2={listTech} datas3={listJob} link1='news' link2="educations" link3="jobs"/> */}

      {/* {resPerPage < count && (
        <div className="paginationDiv">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={count}
            onChange={handlePageClick}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )} */}
      <FooterLayout />
    </>
  );
};

export default News;

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

export async function getServerSideProps({query}) {

  const keyword = query.keyword || ""
  const page =  query.page || 1
  const queryStr = `keyword=${keyword}&page=${page}`

  const newsApi = await getNews(queryStr);

  const { resPerPage, count, local } = newsApi;

  return {
    props: {
      news: local,
      resPerPage,
      count,
    },
  };
}

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
