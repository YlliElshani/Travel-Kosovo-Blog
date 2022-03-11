import axios from "axios";

const getCity = async (cityId) => {
	// const token = await getAuth().currentUser.getIdToken();
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.get(`/cities/${cityId}`, {
		// authorization: `Bearer ${token}`,
	});

	return data;
};

export default getCity;
