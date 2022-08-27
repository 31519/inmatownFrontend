import layoutStyles from "../styles/ScreenLayout.module.css";
import MainscreenJobsDetailComponent from "./MainscreenJobsDetailComponent"
import MainScreenComponent from "./MainScreenComponent"
import Link from "next/link"


const ScreenJobsLayoutDetail = ({url, datas1, datas2, datas3, header1, header2, header3,link1, link2, link3}) => {


  return (
    <div>

      
      <div className={layoutStyles.container}>
        <div className={layoutStyles.mainView}>
          <div className={layoutStyles.mainCont}><MainscreenJobsDetailComponent url={url} datas={datas1} header={header1} /></div>
        </div>

        {/*  */}
        <div className={layoutStyles.secondaryView}>
        {datas2 && (
          <div className={layoutStyles.secondCont}><MainScreenComponent datas={datas2} header={header2} link={link2}/></div>
          )}
          {datas3 && (
          <div className={layoutStyles.secondCont}><MainScreenComponent datas={datas3} header={header3} link={link3} /></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenJobsLayoutDetail;
