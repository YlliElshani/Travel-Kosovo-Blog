import axios from "axios";

const getGastronomyList = async (cityId) => {
	const data = await axios
		.get(`http://localhost:1000/cities/${cityId}/gastronomy`)
		.then((response) => {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});

	return data;
};

export default getGastronomyList;
