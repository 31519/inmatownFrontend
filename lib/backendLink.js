

export const getCommonLink = async (url) => {
  const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

  try {
    // GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=[YOUR_API_KEY] HTTP/1.1

    // const BASE_URL = 'youtube.googleapis.com/youtube/v3'

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

export const getJobs = (searchQuery = "") => {
  const URL = `api/jobs/list/`;

  return getCommonLink(URL);
};

export const getJobsDetail = (params) => {
  // console.log("paramssss", params)
  const URL = `api/jobs/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
}

// News Portions

export const getNews = (searchQuery = "") => {
  const URL = `api/localnews/list/`;

  return getCommonLink(URL);
};

export const getNewsDetail = (params) => {
  const URL = `api/localnews/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
}

// Educations Portions

export const getEducations = (searchQuery = "") => {
  const URL = `api/technology/list/`;

  return getCommonLink(URL);
};

export const getEducationDetail = (params) => {
  const URL = `api/technology/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
}



// Advertise Portions

export const getAdvertise = (searchQuery = "") => {
  const URL = `api/advertisement/list/`;

  return getCommonLink(URL);
};

export const getAdvertiseDetail = (params) => {
  const URL = `api/advertisement/list/${params.id}/${params.slug}/`;
  return getCommonLink(URL);
}

