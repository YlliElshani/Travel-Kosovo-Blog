import axios from "axios";

const deleteCity = async (id) => {
	const data = await await axios
		.delete(`http://localhost:1000/cities/delete/${id}`)
		.then((response) => {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});

	return data;
};

export default deleteCity;
