import axios from "axios";

const getCity = async (cityId) => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  const { data } = await apiCaller.get(`/cities/${cityId}`, {});

  return data;
};

export default getCity;
