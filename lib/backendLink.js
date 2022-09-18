import axios from 'axios'

export const getCommonLink = async (url) => {
  const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  try {
    // GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=[YOUR_API_KEY] HTTP/1.1

    // const BASE_URL = 'youtube.googleapis.com/youtube/v3'

  //   const  {data}  = await axios.get(
  //     `${BASE_URL}/${url}`
  // );

  // console.log("axios api", data)
  

    const response = await fetch(`${BASE_URL}/${url}`);
    const data = await response.json();

    if (data?.error) {
      return [];
    }

    return data;
  } catch (error) {
    return [];
  }
};


// Jobs Portions

export const getJobs = (queryStr) => {
  
  
  const URL = `api/jobs/mainlist?${queryStr}`;

  return getCommonLink(URL);
};

export const getJobsDetail = (params) => {
  // console.log("paramssss", params)
  const URL = `api/jobs/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
};

// News Portions

export const getNews = (queryStr) => {
  
  const URL = `api/localnews/mainlist?${queryStr}`;

  return getCommonLink(URL);
};

export const getNewsDetail = (params) => {
  const URL = `api/localnews/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
};

// Educations Portions

export const getEducations = (queryStr) => {
  const URL = `api/technology/mainlist?${queryStr}`;

  return getCommonLink(URL);
};

export const getEducationDetail = (params) => {
  const URL = `api/technology/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
};

// Advertise Portions

export const getAdvertise = (queryStr) => {
  const URL = `api/advertisement/mainlist?${queryStr}`;

  return getCommonLink(URL);
};

export const getAdvertiseDetail = (params) => {
  const URL = `api/advertisement/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
};
