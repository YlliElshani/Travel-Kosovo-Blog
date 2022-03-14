import axios from "axios";

const createCity = async (PostBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const apiCaller = axios.create({
    baseURL: "http://localhost:1000/",
  });
  const { data } = await apiCaller.post("/cities/create", PostBody, {
    // authorization: `Bearer ${token}`,
  });

  return data;
};

export default createCity;
