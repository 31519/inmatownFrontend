import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScreenLayout from "../components/ScreenLayout";
import FooterLayout from "../components/FooterLayout";
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Link from "next/link";
import Test from "./test";
import Head from "next/head";
// import { localListAction } from "../actions/advertiseActions";
import { localListAction } from "../redux/actions/advertiseActions";
import { advertiseListAction } from "../redux/actions/advertiseActions";

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

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertiseListAction());
    console.log("news haha", listAdvertise);
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
      <Categories />

      {/* <ScreenLayout header1='News' header2="Advertise" datas={listLocal} datas2={listAdvertise} /> */}
      <FooterLayout />
    </div>
  );
}
