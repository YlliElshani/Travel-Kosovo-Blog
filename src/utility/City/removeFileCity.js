import axios from "axios";

const removeFileCity = async (id, file) => {
	// const token = await getAuth().currentUser.getIdToken();
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	return apiCaller.put(`/cities/${id}/removeFile/${file.name}`, {
		// authorization: `Bearer ${token}`,
	});

	// return data;
};

export default removeFileCity;
