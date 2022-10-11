import React , { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SliderComponent from "../slidercomponent/SliderComponent";
import style from "./SliderFramework.module.css";
import { jobListAction } from "../../redux/actions/advertiseActions2";
import { listTechs } from "../../redux/actions/techActions";
import { advertiseListAction} from "../../redux/actions/advertiseActions";
import { localListAction } from "../../redux/actions/advertiseActions";

function SliderFramework() {
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
    techs: education,
  } = techList;

  useEffect(() => {
    dispatch(localListAction());
  }, [dispatch]);

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
    <div className={style.sliderContainer}>
      <div className={style.sliderContent}>
        <SliderComponent datas={listJob} header="Jobs" link="jobs" />
      </div>
      <div className={style.sliderContent}>
        <SliderComponent datas={education} header="Educations" link="educations" />
      </div>
      <div className={style.sliderContent}>
        <SliderComponent datas={listLocal} header="News" link="news" />
      </div>
      <div className={style.sliderContent}>
        <SliderComponent datas={listAdvertise} header="Advertise" link="advertise" />
      </div>

    </div>
  );
}

export default SliderFramework;
