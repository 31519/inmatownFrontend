

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

export const getJobs = (searchQuery = "") => {
  const URL = `api/jobs/list/`;

  return getCommonLink(URL);
};

