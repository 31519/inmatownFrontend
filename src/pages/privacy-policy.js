import React from "react";
import PrivacyStyle from "../styles/privacy.module.css";
import HeaderLayout from "../components/HeaderLayout";
// IMPORT FROM ACTIONS

import SideBar from "../components/SideBar";
import StaticBanner from "../components/StaticBanner";
import FooterLayout from "../components/FooterLayout";
import Categories from "../components/Categories";
import listCategory from "../../data/category.json";
import Banners from "../components/Banners";
import Head from "next/head";
import { Grid, Button } from "@mui/material";

const PrivacyPolicy = () => {
  const category =  listCategory 
  // console.log(navigate, 'navigate')

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="CRfeeds - privacy"></meta>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.png"></link>
        <title>CRfeeds - Privacy</title>
      </Head>
      <SideBar />

      <StaticBanner />
      <Categories />
      <div id="content">
        {/* <Grid className={PrivacyStyle.gridHeader} container item>
            <Button onClick={navigateHandler} color='info' variant='contained'>Back</Button>
        </Grid> */}

        <Grid spacing={2} className={PrivacyStyle.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}></Grid>

          <Grid spacing={1} item xs={12} sm={12} lg={12} md={12}>
            <Grid style={{ margin: "10px" }} item>
              <p className={PrivacyStyle.text}>
                At crfeeds, accessible from www.crfeeds.in, one of our main
                priorities is the privacy of our visitors. This Privacy Policy
                document contains types of information that is collected and
                recorded by crfeeds and how we use it.
              </p>

              <p className={PrivacyStyle.text}>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>

              <p className={PrivacyStyle.text}>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in crfeeds. This
                policy is not applicable to any information collected offline or
                via channels other than this website.
              </p>

              <h2 className={PrivacyStyle.text}>Consent</h2>

              <p className={PrivacyStyle.text}>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>

              <h2 className={PrivacyStyle.text}>Information we collect</h2>

              <p className={PrivacyStyle.text}>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
              </p>
              <p className={PrivacyStyle.text}>
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>
              <p className={PrivacyStyle.text}>
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number.
              </p>

              <h2 className={PrivacyStyle.text}>How we use your information</h2>

              <p className={PrivacyStyle.text}>
                We use the information we collect in various ways, including to:
              </p>

              <ul className={PrivacyStyle.text}>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2 className={PrivacyStyle.text}>Log Files</h2>

              <p className={PrivacyStyle.text}>
                crfeeds follows a standard procedure of using log files. These
                files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
              </p>

              <h2 className={PrivacyStyle.text}>Our Advertising Partners</h2>

              <p className={PrivacyStyle.text}>
                Some of advertisers on our site may use cookies and web beacons.
                Our advertising partners are listed below. Each of our
                advertising partners has their own Privacy Policy for their
                policies on user data. For easier access, we hyperlinked to
                their Privacy Policies below.
              </p>

              <ul>
                <li>
                  <p className={PrivacyStyle.text}>Google</p>
                  <p className={PrivacyStyle.text}>
                    <a href="https://policies.google.com/technologies/ads">
                      https://policies.google.com/technologies/ads
                    </a>
                  </p>
                </li>
              </ul>

              <h2 className={PrivacyStyle.text}>
                Advertising Partners Privacy Policies
              </h2>

              <p className={PrivacyStyle.text}>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of crfeeds.
              </p>

              <p className={PrivacyStyle.text}>
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on crfeeds,
                which are sent directly to users' browser. They automatically
                receive your IP address when this occurs. These technologies are
                used to measure the effectiveness of their advertising campaigns
                and/or to personalize the advertising content that you see on
                websites that you visit.
              </p>

              <p className={PrivacyStyle.text}>
                Note that crfeeds has no access to or control over these
                cookies that are used by third-party advertisers.
              </p>

              <h2 className={PrivacyStyle.text}>
                Third Party Privacy Policies
              </h2>

              <p className={PrivacyStyle.text}>
                crfeeds's Privacy Policy does not apply to other advertisers or
                websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt-out of certain options.{" "}
              </p>

              <p className={PrivacyStyle.text}>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>

              <h2 className={PrivacyStyle.text}>
                CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h2>

              <p className={PrivacyStyle.text}>
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>
              <p className={PrivacyStyle.text}>
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
              </p>
              <p className={PrivacyStyle.text}>
                Request that a business delete any personal data about the
                consumer that a business has collected.
              </p>
              <p className={PrivacyStyle.text}>
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
              </p>
              <p className={PrivacyStyle.text}>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>

              <h2 className={PrivacyStyle.text}>GDPR Data Protection Rights</h2>

              <p className={PrivacyStyle.text}>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>
              <p className={PrivacyStyle.text}>
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
              </p>
              <p className={PrivacyStyle.text}>
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
              </p>
              <p className={PrivacyStyle.text}>
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
              </p>
              <p className={PrivacyStyle.text}>
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
              </p>
              <p className={PrivacyStyle.text}>
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
              </p>
              <p className={PrivacyStyle.text}>
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </p>
              <p className={PrivacyStyle.text}>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>

              <h2 className={PrivacyStyle.text}>Children's Information</h2>

              <p className={PrivacyStyle.text}>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>

              <p className={PrivacyStyle.text}>
                crfeeds does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website, we
                strongly encourage you to contact us immediately and we will do
                our best efforts to promptly remove such information from our
                records.
              </p>
            </Grid>
          </Grid>

          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}></Grid>
        </Grid>
      </div>
      
      <StaticBanner />
      <FooterLayout />
    </>
  );
};

export default PrivacyPolicy;
