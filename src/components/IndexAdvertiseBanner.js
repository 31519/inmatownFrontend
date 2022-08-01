import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import indexAdvertise from "../styles/IndexAdvertiseBanner.module.css";
// import Loaders from "../components/Loader";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
// import { advertiseListAction } from "../actions/advertiseActions";
import { advertiseListAction } from "../redux/actions/advertiseActions";

const IndexAdvertiseBanner = ({ index = 0, link = "advertise" }) => {
  const dispatch = useDispatch();
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  const indexData = listAdvertise[index];

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);
  return (
    <>
      {indexData && (
        <div >
          {indexData && indexData.length !== 0 ? (
            <h2 className={indexAdvertise.heading}>Advertisement</h2>
          ) : null}
          {indexData && (
            <div className={indexAdvertise.container} container>
              {indexData && (
                <Link
                  className={indexAdvertise.textLink}
                  href={`/${link}/${indexData.id}/${indexData.slug}`}
                >
                  <>
                    {indexData.image ? (
                      <img
                        className={indexAdvertise.image}
                        key={indexData.id}
                        src={orig + indexData.image}
                        alt={indexData.title}
                      />
                    ) : (
                      <img
                        className={indexAdvertise.image}
                        key={indexData.id}
                        src="images/advertisePlaceholder.jpg"
                        alt={indexData.title}
                      />
                    )}

                    <h2 className={indexAdvertise.title}>{indexData.title}</h2>
                  </>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IndexAdvertiseBanner;
