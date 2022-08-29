import React, { useEffect } from "react";
import { bannerListAction } from "../redux/actions/advertiseActions";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wrapper } from "../redux/store";
import Slider from "react-slick";
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
import bannerStyles from "../styles/Banners.module.css";
import Image from "next/image";

const Banners = () => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const location = useRouter();
  // const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);
  const img = "/static/banner.png";
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide: true,
  };
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);

  const {
    error: listBannerError,
    loading: listBannerLoading,
    banners: listBanner,
  } = bannerList;

  useEffect(() => {
    dispatch(bannerListAction());
  }, [dispatch, location]);
  return (
    <div>
      {/* <div className={classes.container}>
        <img className={classes.image} src={image} alt="banner" />
      </div> */}

      {/* {listBanner && listBanner.length === 0 && (
        <div className={bannerStyles.container}>
          <Image  layout="fill"  className={bannerStyles.image} src={image} alt="" />
        </div>
      )} */}

      {listBanner.length === 0 && (
        <div className={bannerStyles.loadingContainer}></div>
      )}

      {listBannerError ? (
        <div className={bannerStyles.container}>
          <Image
            layout="fill"
            className={bannerStyles.image}
            src={img}
            alt=""
          />
        </div>
      ) : (
        <Slider {...settings}>
          {listBanner.map((banner) => (
            <div key={banner.id} className={bannerStyles.container}>
              <Image
                layout="fill"
                className={bannerStyles.image}
                key={banner.id}
                src={orig + banner.image}
                alt=""
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Banners;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       await store.dispatch(bannerListAction(req));
//     }
// );
