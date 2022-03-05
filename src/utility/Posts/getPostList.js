import axios from "axios";

const getPostList = async () => {
	// const token = await getAuth().currentUser.getIdToken();
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.get(`/posts/list`, {
		// authorization: `Bearer ${token}`,
	});

	return data;
};

export default getPostList;
