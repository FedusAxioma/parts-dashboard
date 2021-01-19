import { Part } from '../interfaces/Part';
import PartRepository from '../api/PartsRepository';

const getPartAIdentifier: () => string = () => {
	return 'PartA';
};

const getPartA: () => Promise<Part> = async () => {
	return await PartRepository.getPart(getPartAIdentifier());
};

export default {
	getPartA,
};
