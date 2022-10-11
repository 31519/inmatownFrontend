import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { advertiseListAction } from "../../../redux/actions/advertiseActions";
import { localListAction } from "../../../redux/actions/advertiseActions";
import { jobListAction } from "../../../redux/actions/advertiseActions2";
import SideBar from "../../../components/SideBar";
import FooterLayout from "../../../components/FooterLayout";
import MetaDetail from "../../../components/MetaDetail";
// import Banners from "../../../components/Banners";
import StaticBanner from "../../../components/StaticBanner";
// import BbcComponent from "../../../components/BbcComponent";
// import BbcText from "../../../components/BbcText";
import { getNewsDetail } from "../../../../lib/backendLink";
import MainScreenComponent from "../../../components/MainScreenComponent";
// import MainScreenDetailComponent from "../../../components/MainscreenDetailComponent";
import Categories from "../../../components/Categories";
import { getNews } from "../../../../lib/backendLink";
import { localDetailAction } from "../../../redux/actions/advertiseActions";
import SideviewOne from "../../../components/sideviewone/SideviewOne";
import Detail from "../../../components/detailpage/Detail";
import SliderFramework from "../../../components/sliderframework/SliderFramework";

// COMPONENT ALL

const NewsDetail = () => {
  const router = useRouter();
  const { slug, id } = router.query;
  console.log("query", router.query);
  const dispatch = useDispatch();
  const mainUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

  const localDetail = useSelector((state) => state.localDetail);

  const {
    error: detailLocalError,
    loading: detailLocalLoading,
    local: news,
  } = localDetail;

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
    dispatch(localDetailAction(id, slug));
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
      {news && (
        <MetaDetail
          title={news.title}
          description={news.metadesc}
          ogTitle={news.title}
          ogType="website"
          ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
          ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + news.image}
        />
      )}

      <SideBar />
      <StaticBanner />
      <Categories />
      {/* # 2ND HEADER */}
      <Grid container>
        <Grid items lg={8} md={12} sm={12} xs={12}>
          <Detail datas={news} url={mainUrl} header="News" link="news" />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12}>
          <SideviewOne datas={listJob} header="Recent Jobs" link="jobs" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}
      {/* <MainScreenDetailComponent url={mainUrl} link="news" datas={news} header="News" />

      <BbcText datas={listJob} link="jobs" header="Recent Jobs" />

      <Banners />
      <

      <MainScreenComponent datas={listJob} header="Recent Jobs" link="jobs" /> */}
      <Grid container>
        <Grid items lg={8} md={8} sm={12} xs={12}>
          <MainScreenComponent
            datas={listJob}
            header="Recent Jobs"
            link="jobs"
          />
        </Grid>
      </Grid>
      {/* <SliderFramework /> */}
      <FooterLayout />
    </>
  );
};

export default NewsDetail;

// export async function getStaticProps({ params }) {
//   const newsApi = await getNewsDetail(params);

//   return {
//     props: {
//       news: newsApi,
//     },
//     revalidate: 10,
//   };
// }

// export const  getStaticPaths = async() => {
//   const newsApi = await getNews();
//   const { resPerPage, count, local } = newsApi;

//   return {
//       paths: local.map((news) => ({
//         params: { slug:news.slug, id:news.id.toString() }
//       })),

//       fallback: 'blocking'
//   }
// }

// export async function getServerSideProps({params}) {

//   const client = new ApolloClient({
//     uri: "http://localhost:8000/graphql/",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({

//       query: gql`
//         query (id:${params.id} {
//           newsDetail {
//             title
//             content
//             image
//             id
//             createdAt
//         }
//       `,
//     });

// return {
//   props: {
//     news: data.newsDetail,
//   },
// };
// }
