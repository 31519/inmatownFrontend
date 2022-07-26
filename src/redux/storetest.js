import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {
  techListReducer,
  healthListReducer,
  businessListReducer,
  scienceListReducer,
  techDetailReducer,
  createTechReducer,
  createScienceReducer,
  createHealthReducer,
  createBusinessReducer,
} from "./reducers/techReducers";

import {

  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDetailReducer,
  userDeleteReducer,
  userUpdateReducer,

  // PROFILE PORTIONS
  profileListReducer,
  profileDetailReducer,
  profileUpdateReducer,
} from "./reducers/userReducers";

import {
  localListReducer,
  localUserListReducer,
  localDetailReducer,
  localCreateReducer,
  localUpdateReducer,
  localDeleteReducer,

  
  advertiseListReducer,
  allAdvertiseListReducer,
  advertiseUserListReducer,
  advertiseDetailReducer,
  advertiseCreateReducer,
  advertiseUpdateReducer,
  advertiseDeleteReducer,

  // CELEBRITY PORTION
  celebrityListReducer,
  celebrityUserListReducer,
  celebrityDetailReducer,
  celebrityCreateReducer,
  celebrityUpdateReducer,
  celebrityDeleteReducer,

  // EVENT PORTION
  eventListReducer,
  eventUserListReducer,
  eventDetailReducer,
  eventCreateReducer,
  eventUpdateReducer,
  eventDeleteReducer,

  // SHOP PORTION
  shopListReducer,
  shopUserListReducer,
  shopDetailReducer,
  shopCreateReducer,
  shopUpdateReducer,
  shopDeleteReducer,

  // MEME PORTION
  memeListReducer,
  memeUserListReducer,
  memeDetailReducer,
  memeCreateReducer,
  memeUpdateReducer,
  memeDeleteReducer,

  // MEME PORTION

  // FORM PORTION
  formListReducer,
  formDetailReducer,
  formCreateReducer,
  formUpdateReducer,

  // BANNER PORTION
  bannerListReducer,
} from "./reducers/productivityReducers";

import {
  // HOTEL PORTION
  hotelListReducer,
  hotelUserListReducer,
  hotelDetailReducer,
  hotelCreateReducer,
  hotelUpdateReducer,
  hotelDeleteReducer,

  // RESELLER PORTION
  resellerListReducer,
  allResellerListReducer,
  resellerUserListReducer,
  resellerDetailReducer,
  resellerCreateReducer,
  resellerUpdateReducer,
  resellerDeleteReducer,

  // TOURISMS PORTION
  tourismsListReducer,
  tourismsUserListReducer,
  tourismsDetailReducer,
  tourismsCreateReducer,
  tourismsUpdateReducer,
  tourismsDeleteReducer,

  // JOBS PORTION
  jobListReducer,
  jobUserListReducer,
  jobDetailReducer,
  jobCreateReducer,
  jobUpdateReducer,
  jobDeleteReducer,
} from "./reducers/productivityReducers2";

import { viewListReducer } from "./reducers/analyticsReducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducers = combineReducers({
  // LOCAL PORTION
  localList: localListReducer,
  localUserList: localUserListReducer,
  localDetail: localDetailReducer,
  localUpdate: localUpdateReducer,
  localDelete: localDeleteReducer,
  localCreate: localCreateReducer,

  viewList: viewListReducer,

  techList: techListReducer,
  healthList: healthListReducer,
  businessList: businessListReducer,
  scienceList: scienceListReducer,

  techDetail: techDetailReducer,

  techCreate: createTechReducer,
  businessCreate: createBusinessReducer,
  healthCreate: createHealthReducer,
  scienceCreate: createScienceReducer,

  // USERS
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDetail: userDetailReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,

  // PROFILE PORTION

  profileList: profileListReducer,
  profileDetail: profileDetailReducer,
  profileUpdate: profileUpdateReducer,

  advertiseList: advertiseListReducer,
  allAdvertiseList: allAdvertiseListReducer,
  advertiseUserList: advertiseUserListReducer,
  advertiseDetail: advertiseDetailReducer,
  advertiseCreate: advertiseCreateReducer,
  advertiseUpdate: advertiseUpdateReducer,
  advertiseDelete: advertiseDeleteReducer,

  // CELEBRITY PORTION
  celebrityList: celebrityListReducer,
  celebrityUserList: celebrityUserListReducer,
  celebrityDetail: celebrityDetailReducer,
  celebrityCreate: celebrityCreateReducer,
  celebrityUpdate: celebrityUpdateReducer,
  celebrityDelete: celebrityDeleteReducer,

  // EVENT PORTION
  eventList: eventListReducer,
  eventUserList: eventUserListReducer,
  eventDetail: eventDetailReducer,
  eventUpdate: eventUpdateReducer,
  eventDelete: eventDeleteReducer,
  eventCreate: eventCreateReducer,

  // HOTEL PORTION
  hotelList: hotelListReducer,
  hotelUserList: hotelUserListReducer,
  hotelDetail: hotelDetailReducer,
  hotelUpdate: hotelUpdateReducer,
  hotelDelete: hotelDeleteReducer,
  hotelCreate: hotelCreateReducer,

  // SHOP PORTION
  shopList: shopListReducer,
  shopUserList: shopUserListReducer,
  shopDetail: shopDetailReducer,
  shopUpdate: shopUpdateReducer,
  shopDelete: shopDeleteReducer,
  shopCreate: shopCreateReducer,



  // SHOP PORTION
  memeList: memeListReducer,
  memeUserList: memeUserListReducer,
  memeDetail: memeDetailReducer,
  memeUpdate: memeUpdateReducer,
  memeDelete: memeDeleteReducer,
  memeCreate: memeCreateReducer,

  // FORM PORTION
  formList: formListReducer,
  formDetail: formDetailReducer,
  formUpdate: formUpdateReducer,
  formCreate: formCreateReducer,

  // BANNER PORTION
  bannerList: bannerListReducer,

  // RESELLER PORTION
  resellerList: resellerListReducer,
  allResellerList: allResellerListReducer,
  resellerUserList: resellerUserListReducer,
  resellerDetail: resellerDetailReducer,
  resellerUpdate: resellerUpdateReducer,
  resellerDelete: resellerDeleteReducer,
  resellerCreate: resellerCreateReducer,

  // TOURISMS PORTION
  tourismsList: tourismsListReducer,
  tourismsUserList: tourismsUserListReducer,
  tourismsDetail: tourismsDetailReducer,
  tourismsUpdate: tourismsUpdateReducer,
  tourismsDelete: tourismsDeleteReducer,
  tourismsCreate: tourismsCreateReducer,

  // JOB PORTION
  jobList: jobListReducer,
  jobUserList: jobUserListReducer,
  jobDetail: jobDetailReducer,
  jobUpdate: jobUpdateReducer,
  jobDelete: jobDeleteReducer,
  jobCreate: jobCreateReducer,
});

// const userInfoFromStorage = localStorage.getItem('userLogin') ?
//     JSON.parse(localStorage.getItem('userLogin')) : null

// const initialState = {
//     userLogin: { userInfo: userInfoFromStorage},
// }

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
