import axios from "axios";

const createRealEstate = async (CityBody) => {
	// const token = await getAuth().currentUser.getIdToken();
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.post("/cities/create", CityBody, {
		// authorization: `Bearer ${token}`,
	});

	return data;
};

export default createRealEstate;
