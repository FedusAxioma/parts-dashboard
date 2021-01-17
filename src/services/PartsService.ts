import { Part } from '../interfaces/Part';
import PartRepository from '../api/PartsRepository';

const getPartA: () => Promise<Part> = async () => {
	return await PartRepository.getPart('PartA');
};

export default {
	getPartA,
};
