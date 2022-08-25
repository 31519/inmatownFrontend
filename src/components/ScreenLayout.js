import layoutStyles from "../styles/ScreenLayout.module.css";
import MainScreenComponent from "./MainScreenComponent"
// import MainScreenComponent1 from "./MainScreenComponent1"
import BBCscreens from "./BBCscreens"

const ScreenLayout = ({datas1, count, resPerPage, pages, page, datas2, datas3, header1, header2, header3, link1, link2, link3}) => {
  return (
    <div>
      
      <div className={layoutStyles.container}>
        <div className={layoutStyles.mainView}>
          <div className={layoutStyles.mainCont}><BBCscreens datas={datas1} resPerPage={resPerPage} count={count} header={header1} link={link1}/></div>
        </div>

      </div>
    </div>
  );
};

export default ScreenLayout;
