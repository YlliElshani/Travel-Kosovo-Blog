import axios from "axios";

const getPostList = async () => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  const { data } = await apiCaller.get(`/posts/list`, {});

  return data;
};

export default getPostList;
