// import axios from 'axios';
import { Part } from '../interfaces/Part.js';

const apiUrl = process.env.REACT_APP_API_URL;

const getPart = async (partName: string): Promise<Part> => {
	if (apiUrl) {
		// return await axios.get(`${apiUrl}/parts/${partName}`);

		return Promise.resolve({ name: partName, features: [] });
	}

	throw ({
		name: 'Error',
		message: 'API url not defined',
	});
};

export default {
	getPart,
};
