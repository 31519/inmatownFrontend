import React, { useEffect } from "react";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../redux/actions/advertiseActions";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import { listTechs } from "../../redux/actions/techActions";
import axios from "axios";
import ScreenLayout from "../../components/ScreenLayout";
import HeaderLayout from "../../components/HeaderLayout";
import FooterLayout from "../../components/FooterLayout";
import MetaScreen from "../../components/MetaScreen";
import SearchBox from "../../components/SearchBox";
import Pagination from "react-js-pagination";

// COMPONENT ALL



const News = ({ news, count, resPerPage }) => {

  const router = useRouter();

  let { page = 1, keyword } = router.query;
  page = Number(page)

  let queryParams;
  if(typeof window != 'undefined') {
    queryParams = new URLSearchParams(window.location.search)

  }

  const handlePageClick = (currentPage) => {
    if(queryParams.has('page')) {
      queryParams.set('page', currentPage);
    } else {
      queryParams.append('page', currentPage)
    }
    router.push({
      search: queryParams.toString()
    })
  };

  const dispatch = useDispatch();
  const metaImage = "/inmatown.png"
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
    techs: listTech,
  } = techList;
  

  
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
    <>
      <MetaScreen title="Inmatown - Recent News" description="Inmatown - Recent News" ogTitle="Inmatown - Recent News" ogType="website" ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath} ogImage={`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}` + `${metaImage}`} />
      <HeaderLayout />
      <SearchBox/>
      <ScreenLayout  header1='News' header2="Education" header3="Jobs" datas1={news}  count={count} resPerPage={resPerPage} datas2={listTech} datas3={listJob} link1='news' link2="educations" link3="jobs"/>
      {resPerPage < count && (
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
      )}
      <FooterLayout/>
    </>
  );
};

export default News;



export async function getServerSideProps({query}) {

  const keyword = query.keyword || ''
  const page = query.page || ""

  const queryStr = `keyword=${keyword}&page=${page}`
  const newsApi = await axios.get(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/localnews/mainlist?${queryStr}`);
  const newsData = newsApi.data;
  const { count, resPerPage, local } = newsData;

  return {
    props: {
      news: local,
      count:count,
      resPerPage:resPerPage
    },
  };
}
