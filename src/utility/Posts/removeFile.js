import axios from "axios";

const removeFile = async (id, file) => {
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  return apiCaller.put(`/posts/${id}/removeFile/${file.name}`, {});
};

export default removeFile;
