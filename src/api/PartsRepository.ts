// import axios from 'axios';
import { Part } from '../interfaces/Part.js';

const apiUrl = process.env.REACT_APP_API_URL;

const mockPartA: Part = {
	id: '123',
	name: 'Part A',
	features: [
		{
			id: '234',
			name: 'Feature 1',
			controls: [
				{
					id: '345',
					name: 'Diameter',
					deviation: 0,
					deviationOutTotal: 0,
					status: 'GOOD',
				},
			],
			status: 'WARNING',
		},
	],
};

const getPart = async (partName: string): Promise<Part> => {
	if (apiUrl) {
		// This is the call to API, that is mocked until I create BE
		// I'm using partName instead of id, so partName is an easier identifier for the dashboard and id can change from acc DB to prod DB
		// Depending on implementation for multiple dashboards this might change and retrieve first all parts and then call one by one
		//
		//
		// return await axios.get(`${apiUrl}/parts/${partName}`);

		// Add console log to avoid linting issues
		console.log(partName);

		return Promise.resolve(mockPartA);
	}

	throw new Error('API url not defined');
};

export default {
	getPart,
};
