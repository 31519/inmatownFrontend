import layoutStyles from "../styles/ScreenLayout.module.css";
import MainScreenComponent from "./MainScreenComponent"
import MainScreenComponent1 from "./MainScreenComponent1"

const ScreenLayout = ({datas1, pages, page, datas2, datas3, header1, header2, header3, link1, link2, link3}) => {
  return (
    <div>
      
      <div className={layoutStyles.container}>
        <div className={layoutStyles.mainView}>
          <div className={layoutStyles.mainCont}><MainScreenComponent1 datas={datas1} pages={pages} page={page} header={header1} link={link1}/></div>
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

export default ScreenLayout;
