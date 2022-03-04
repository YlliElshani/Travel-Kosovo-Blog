import axios from "axios";

const createCity = async (CityBody) => {
	const data = await axios
		.post(`http://localhost:1000/cities/create/`, CityBody)
		.then((response) => {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});

	return data;
};

export default createCity;
