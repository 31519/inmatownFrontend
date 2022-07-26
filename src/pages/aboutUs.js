import React from "react";
import AboutusStyle from "../styles/aboutUs.module.css";

// IMPORT FROM ACTIONS
import HeaderLayout from "../components/HeaderLayout";
import FooterLayout from "../components/FooterLayout";
import { Grid } from "@mui/material";




const aboutUs = () => {

  // const pathname = window.location.pathname




  return (
    <>
      <HeaderLayout/>
      <div className="techlist">
        <Grid className={AboutusStyle.gridHeader} container item>
          {/* <Button >
            Back
          </Button> */}
        </Grid>

        <div spacing={2} className={AboutusStyle.gridContent} container>
          <div className={AboutusStyle.titleContainer}>
            <p className={AboutusStyle.title}>About Us</p>
            <p className={AboutusStyle.title}>- Our Mission -</p>
            <p className={AboutusStyle.title}>
              To provide the people with latest news and information related to
              education, jobs, schemes, tourisms, event and many other usefull
              information which benefits the people
            </p>
            <hr />
            <p className={AboutusStyle.aboutContent}>
              At inmatown.com we area group entrepreneur base at Jowai who
               work hard every day to improve and provide updated
              informations to the people related to news, event , schemes,
              tourisms, jobs. We also except partnership with our brand . We are
              quick to work with you whether it be personal or to promote your
              brand or to advertise according to your needs.


            </p>
            <p className={AboutusStyle.aboutContent}>
              We work mainly on providing Jobs related information
              and Tourisms and apart from this we provide latest news relating
              to education, jobs , skill , ideas , business . We provide information 
              about various schemes, events . We also let you to put any second hand
              things in our site for reselling

              
            </p>
          </div>
        </div>
      </div>
      <FooterLayout/>
    </>
  );
};

export default aboutUs;