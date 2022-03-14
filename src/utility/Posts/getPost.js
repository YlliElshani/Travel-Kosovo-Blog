import axios from "axios";

const getPost = async (PostId) => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  const { data } = await apiCaller.get(`/posts/${PostId}`, {});

  return data;
};

export default getPost;
