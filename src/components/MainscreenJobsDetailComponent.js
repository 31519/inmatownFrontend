import mainJobDetailScreen from "../styles/MainJobsScreenDetailComponent.module.css";
import moment from "moment";
import SocialShare from "./SocialShare";
import parse from "html-react-parser";
import Image from "next/image"

const MainScreenJobsDetailComponent = ({ url, datas, header }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  return (
    <>
      {datas && (
        <div className={mainJobDetailScreen.container}>
          <div className={mainJobDetailScreen.containerParent}>
            <div className={mainJobDetailScreen.containerOne}>
              <div className={mainJobDetailScreen.stateBox}>
                <h2 className={mainJobDetailScreen.brand} variant="p">
                  Inmatown
                </h2>
              </div>
              <div className={mainJobDetailScreen.ImageContainer}>
                {datas.image ? (
                  <Image
                    layout='fill'
                    className={mainJobDetailScreen.image}
                    key={datas.id}
                    src={orig + datas.image}
                    alt=""
                  />
                ) : (
                  <Image
                    layout='fill'
                    className={mainJobDetailScreen.image}
                    key={datas.id}
                    src="/static/jobs.jpg"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              <h2 className={mainJobDetailScreen.state}>MEGHALAYA</h2>
            </div>

            <div className={mainJobDetailScreen.containerTwo}>
              <h3
                variant="h6"
                color="primary"
                className={mainJobDetailScreen.date}
              >
                UPDATED ON {datas.createdAt && datas.createdAt.split("T", 1)}{" "}
                {"Time"} {datas.createdAt && datas.createdAt.substr(11, 8)}
              </h3>

              <h2 className={mainJobDetailScreen.startDate}>
                Start Date: {datas.startDate && datas.startDate.split("T", 1)}
              </h2>
              <h2 className={mainJobDetailScreen.endDate}>
                End Date: {datas.startDate && datas.endDate.split("T", 1)}
              </h2>

              <hr />

              <h3
                className={mainJobDetailScreen.title}
                variant="h3"
                color="secondary"
                gutterBottom
              >
                {datas.title}
              </h3>
              <hr />
              {datas.content && (
                <pre className={mainJobDetailScreen.preTag}>
                  {parse(datas.content)}
                </pre>
              )}

              {datas.jobsDetail && (
                <div className={mainJobDetailScreen.datasContainer}>
                  {datas.jobsDetail.map((detail, index) => (
                    <>
                      <h2
                        style={{
                          color: "#119eef",
                          fontSize: "25px",
                          marginBottom: "10px",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        {index + 1} : Job Detail
                      </h2>
                      {detail.postName && (
                        <>
                          <h2 className={mainJobDetailScreen.detailText}>
                            Post Name :{" "}
                          </h2>
                          <pre className={mainJobDetailScreen.preTagDetail}>
                            {parse(detail.postName)}
                          </pre>
                        </>
                      )}
                      {detail.qualification && (
                        <>
                          <h2 className={mainJobDetailScreen.detailText}>
                            Qualification :{" "}
                          </h2>
                          <pre className={mainJobDetailScreen.preTagDetail}>
                            {parse(detail.qualification)}
                          </pre>
                        </>
                      )}
                      {detail.experience && (
                        <>
                          <h2 className={mainJobDetailScreen.detailText}>
                            Experience :{" "}
                          </h2>
                          <pre className={mainJobDetailScreen.preTagDetail}>
                            {parse(detail.experience)}
                          </pre>
                        </>
                      )}
                      {detail.howToApply && (
                        <>
                          <h2 className={mainJobDetailScreen.detailText}>
                            How To Apply :{" "}
                          </h2>
                          <pre className={mainJobDetailScreen.preTagDetail}>
                            {parse(detail.howToApply)}
                          </pre>
                          <hr />
                        </>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={mainJobDetailScreen.Buttom}>
        <div className={mainJobDetailScreen.socialShare}>
          <SocialShare url={url} />
        </div>
      </div>
    </>
  );
};

export default MainScreenJobsDetailComponent;
