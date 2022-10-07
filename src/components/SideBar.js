import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { profileDetailActions } from "../actions/userActions";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
// import { userLogoutActions } from "../actions/userActions";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import style from "../styles/SideBar.module.css";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import EventIcon from "@mui/icons-material/Event";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MediaIcon from "./MediaIcon";
// import { userDetailActions } from "../actions/userActions";

const logoImage = "/static/logo.png";

const listCategory = [
  {
    title: "Home",
    link: "/",
    icon: <EventIcon />,
  },
  {
    title: "Jobs",
    link: "/jobs",
    icon: <ConstructionIcon />,
  },

  {
    title: "Education",
    link: "/educations",
    icon: <SchoolIcon />,
  },
  {
    title: "News",
    link: "/news",
    icon: <EventIcon />,
  },
  {
    title: "Advertise",
    link: "/advertise",
    icon: <FeaturedVideoIcon />,
  },
  {
    title: "About us",
    link: "/aboutUs",
    icon: <EventIcon />,
  },
  {
    title: "Privacy",
    link: "/privacy-policy",
    icon: <LandscapeIcon />,
  },
  {
    title: "Terms and Conditions",
    link: "/termsandcondition",
    icon: <LandscapeIcon />,
  },
  // {
  //   title: "Resell",
  //   link: "/resell",
  //   icon: <TwoWheelerIcon />,
  // },
  // {
  //   title: "Rent In My Area",
  //   link: "/rental",
  //   icon: <HomeIcon />,
  // },
];

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const userDefaultImage = "images/default/userDefaultImage.png";
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const {
    user: detailUser,
    loading: loadingUser,
    error: errorUser,
  } = userDetail;

  const open = () => {
    // var checkBox = document.querySelector(".check").checked;
    // var cancelBtn = document.querySelector(".cancel");
    // var menuBtn = document.querySelector(".btn");
    // var sidebar = document.querySelector(".sidebarClose");

    // sidebar.style.cssText = "left:0px";
    // cancelBtn.style.cssText = "left: 195px";
    // menuBtn.style.cssText = "left: 250px; opacity: 0; pointer-events:none ";
    // console.log(sidebar, "sidebar")
    // console.log("hi")
    setSidebar(true);
  };

  const close = () => {
    // var cancelBtn = document.querySelector("#cancel");
    // var menuBtn = document.querySelector("#btn");
    // var sidebar = document.querySelector(".sidebar");
    // if (sidebar) {
    //   sidebar.style.cssText = "left: -250px";
    //   menuBtn.style.cssText = "left: 4px; opacity: 10; ";
    //   cancelBtn.style.cssText = "left: -195px";
    // }

    setSidebar(false);
  };

  // UserDetail useEffect
  useEffect(() => {
    setSidebar(false);

    {
      userInfo && userInfo.id && dispatch(userDetailActions(userInfo.id));
    }

    const logoutHandler = () => {
      if (window.confirm("Are You Sure You Want To Logout ")) {
        dispatch(userLogoutActions());
      }
    };

    // document.addEventListener("click", function (evt) {
    //   var navBar = document.getElementById("check"),
    //     targetEl = evt.target;
    //   do {
    //     if (targetEl === navBar) {
    //       open();
    //       return;
    //     }
    //     targetEl = targetEl.parentNode;
    //   } while (targetEl);
    //     close();
    // });

    document.addEventListener("scroll", function (event) {
      var scrollId = document.getElementById("check"),
        scrollTarget = event.target;
      {
        scrollTarget !== scrollId && close();
      }
    });
  }, [dispatch, userInfo]);

  return (
    <>
      <nav className={style.nav} id="check">
        <div>
          <input type="checkbox" className={style.check} />
          <label for="check" className={style.label}>
            <div className={style.btn} onClick={open}>
              {" "}
              <MenuIcon />
            </div>
          </label>
          <input type="checkbox" className={style.checkClose} />
          <label for="checkClose" className={style.label}>
            <div
              className={
                sidebar === true ? style.cancelOpen : style.cancelClose
              }
              onClick={close}
            >
              {" "}
              <CloseIcon />
            </div>
          </label>
          <div
            className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            }
          >
            {/* <div className={style.sidebarClose} > */}
            <header className={style.header}>
              {/* {userInfo && (
                <>
                  {detailUser && detailUser.image ? (
                    <div className={style.profile_img}>
                      <img src={detailUser.image} alt=""/>
                    </div>
                  ) : (
                    <>
                      <div className={style.profile_img}>
                        <img src={userDefaultImage} alt="name" />
                      </div>
                    </>
                  )}

                  <div className={style.dashboard_email}>
                    {detailUser && <h3> {detailUser.email} </h3>}
                  </div>
                  {userInfo && (
                    <Link
                      className={style.text_link}
                      href={`/user-update/${userInfo.id}`}
                    >
                      <div className={style.dashboard-edit} onClick={close}>
                        <h3> Edit Profile </h3>
                      </div>
                    </Link>
                  )}
                </>
              )}
              {userInfo ? (
                <div className={style.icon_text } onClick={logoutHandler}>
                  <h3 onClick={close}>Logout</h3>
                </div>
              ) : (
                <Link className={style.text_link} href="/login">
                 
                  <div className={style.icon_text } onClick={close}>
                    <h3>Login</h3>
                  </div>
                </Link>
              )} */}
              {/* {userInfo && userInfo.isAdmin && (
                <Link
                  className={style.text-link}
                  href="/admin-dashboard"
                  onClick={close}
                >

                </Link>
              )}

              {userInfo && (
                <Link className="text-link" href="/my-dashboard">
                  <div className="icon-text dashboard" onClick={close}>
                    <h3>Dashboard</h3>
                  </div>
                </Link>
              )} */}
            </header>
            
            <MediaIcon />
            <div className={style.listContainer}>
              <ul>
                {listCategory &&
                  listCategory.map((list) => (
                    <Link
                      key={list.title}
                      className={style.link}
                      href={list.link}
                    >
                      <li className={style.list} onClick={close}>
                        {list.icon} <h4 className={style.h4}>{list.title}</h4>
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={style.logo}>
          <Link className={style.text_link} href="/">
            {logoImage ? (
              <img className={style.imageLogo} src={logoImage} alt="inmatown" />
            ) : (
              <h2
                className={style.navbar - logo}
                style={{ padding: "0px", margin: "0px", color: "white" }}
              >
                CRfeeds
              </h2>
            )}
          </Link>
        </div>
      </nav>
      <div className={style.containerNav} style={{ marginTop: "50px" }}></div>
    </>
  );
};

export default SideBar;
