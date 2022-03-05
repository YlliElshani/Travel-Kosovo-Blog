import axios from "axios";

const getPost = async (PostId) => {
	// const token = await getAuth().currentUser.getIdToken();
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.get(`/posts/${PostId}`, {
		// authorization: `Bearer ${token}`,
	});

	return data;
};

export default getPost;
