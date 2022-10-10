import mainDetailScreen from "../styles/MainScreenDetailComponent.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import SocialShare from "./SocialShare";
import parse from "html-react-parser";
import Image from "next/image";
import { RichTextRenderer } from "@webiny/react-rich-text-renderer";
import MetaDetail from "./MetaDetail";

const MainScreenDetailComponent = ({ url, link, datas, header }) => {
  const orig = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const router = useRouter();

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={mainDetailScreen.mainContainer}>
      {/* <MetaDetail
        title={datas.title}
        description={datas.metadesc}
        ogTitle={datas.title}
        ogType="website"
        ogUrl={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + router.asPath}
        ogImage={process.env.NEXT_PUBLIC_DEVELOPMENT_URL + datas.image}
      /> */}
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
                      CRfeeds
                    </h2>
                  </div>
                  <div className={mainDetailScreen.ImageContainer}>
                    {datas.image ? (
                      <Image
                        layout="fill"
                        className={mainDetailScreen.image}
                        key={datas.id}
                        src={orig + datas.image}
                        alt=""
                        // objectFit='contain'
                      />
                    ) : (
                      <Image
                        layout="fill"
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

                  <h3 className={mainDetailScreen.title}>{datas.title}</h3>
                  <hr />
                  {datas.content && (
                    <div
                      dangerouslySetInnerHTML={createMarkup(datas.content)}
                    />
                  )}
                  {/* {datas.content && (
                    <pre className={mainDetailScreen.preTag} >{parse(datas.content)}</pre>
                  )} */}
                  <hr />

                  <div className={mainDetailScreen.Buttom}>
                    <div className={mainDetailScreen.socialShare}>
                      <SocialShare url={link} datas={datas} />
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
