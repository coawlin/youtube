import axios from "axios";

const API_KEY = "AIzaSyA8YTXYEngCDOk2fnTGRblWBn0VS3vm1K0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: API_KEY,
  },
});
