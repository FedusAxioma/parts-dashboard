// import axios from 'axios';
import { mockPartA } from './Parts';
import { Part } from '../interfaces/Part.js';

const apiUrl = process.env.REACT_APP_API_URL;

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

		// Delay a few seconds to show loader
		const sleep = (ms: number): Promise<void> => {
			return new Promise(resolve => setTimeout(resolve, ms));
		};

		await sleep(2000);

		return Promise.resolve(mockPartA);
	}

	throw new Error('API url not defined');
};

export default {
	getPart,
};
