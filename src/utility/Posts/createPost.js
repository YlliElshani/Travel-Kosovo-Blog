import axios from "axios";

const createPost = async (PostBody) => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  const { data } = await apiCaller.post("/posts/create", PostBody, {});

  return data;
};

export default createPost;
