import axios from "axios";

const getCityList = async () => {
	// const token = await getAuth().currentUser.getIdToken();
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.get(`/cities/`, {
		// authorization: `Bearer ${token}`,
	});

	return data;
};

export default getCityList;
