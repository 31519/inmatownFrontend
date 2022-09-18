import mainDetailScreen from "../styles/MainScreenDetailComponent.module.css";
import moment from "moment";
import SocialShare from "./SocialShare";
import parse from "html-react-parser";
import Image from "next/image"

const MainScreenDetailComponent = ({ url, link, datas, header, }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL

  



  return (
    <div className={mainDetailScreen.mainContainer}>
      <div className={mainDetailScreen.header}>
        <h1 className={mainDetailScreen.header1}>{header}</h1>
      </div>
      <hr />

      <div className={mainDetailScreen.container1}>
        {datas && (
          <div>
            <div className={mainDetailScreen.container}>
              <div className={mainDetailScreen.containerParent}>
                <div className={mainDetailScreen.containerOne}>
                  <div className={mainDetailScreen.stateBox}>
                    <h2 className={mainDetailScreen.brand} variant="p">
                      Inmatown
                    </h2>
                  </div>
                  <div className={mainDetailScreen.ImageContainer}>
                    {datas.image ? (
                      <Image
                        layout='fill'
                        className={mainDetailScreen.image}
                        key={datas.id}
                        src={orig + datas.image}
                        alt=""
                        // objectFit='contain'
                      />
                    ) : (
                      <Image
                      layout='fill'
                        className={mainDetailScreen.image}
                        key={datas.id}
                        src="/placeholder.png"
                        alt=""
                      />
                    )}
                  </div>
                  
                </div>
                <div>
                  <h2 className={mainDetailScreen.state}>MEGHALAYA</h2>
                </div>

                <div className={mainDetailScreen.containerTwo}>
                  <p className={mainDetailScreen.posted}>
                    Posted{" "}
                    {moment
                      .utc(datas.createdAt)
                      .local()
                      .startOf("second")
                      .fromNow()}
                  </p>

                  <h3
                    className={mainDetailScreen.title}
                  >
                    {datas.title}
                  </h3>
                  <hr />
                  {datas.content && (
                    <pre className={mainDetailScreen.preTag} >{parse(datas.content)}</pre>
                  )}
                  <hr />

                  <div className={mainDetailScreen.Buttom}>
                    <div className={mainDetailScreen.socialShare}>
                      <SocialShare  url={link} datas={datas}/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreenDetailComponent;
