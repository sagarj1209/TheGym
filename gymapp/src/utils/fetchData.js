export const exerciseOptions = {
  method: "GET",
  // url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  // url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "b4b5d5af3dmsh594d376486d141dp1d88c1jsnd1894420a4ad",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
