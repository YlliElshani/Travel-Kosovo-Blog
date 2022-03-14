import axios from "axios";

const getCityList = async () => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  const { data } = await apiCaller.get(`/cities/`, {});

  return data;
};

export default getCityList;
