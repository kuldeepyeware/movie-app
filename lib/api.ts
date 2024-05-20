import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url: String, params?: String) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
