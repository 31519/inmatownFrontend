import React, { useEffect } from "react";
import BottomFooters from './BottomFooters'
import ContactUs from './ContactUs'
import IndexAdvertiseBanner from './IndexAdvertiseBanner'

const FooterLayout = () => {

  return (
    <>
    {/* <ContactUs/> */}
    <IndexAdvertiseBanner index={2} />
    <BottomFooters/>

    </>
  );
};

export default FooterLayout;


