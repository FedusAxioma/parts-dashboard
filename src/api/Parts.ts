// Only mock for parts
import { Control } from '../interfaces/Control';
import { Part } from '../interfaces/Part';
import { Status } from '../interfaces/Status';
import { v4 as uuidv4 } from 'uuid';

const createControls = (requiredAmount: number, isRandomStatus: boolean): Control[] => {
	const controls: Control[] = [];

	for (let i = 0; i < requiredAmount; i++) {
		controls.push({
			id: uuidv4(),
			name: ['Diameter', 'X', 'Y', 'Z'][Math.floor(Math.random() * 4)],
			deviation: isRandomStatus ? Math.random() : 0,
			deviationOutTotal: isRandomStatus ? Math.random() : 0,
			status: isRandomStatus ? ['GOOD', 'WARNING', 'ERROR'][Math.floor(Math.random() * 3)] as Status : 'GOOD',
		});
	}

	return controls;
};

const mockPartA: Part = {
	id: uuidv4(),
	name: 'Part A',
	features: [
		{
			id: uuidv4(),
			name: 'Feature 1',
			status: 'GOOD',
			controls: createControls(10, false),
		},
	],
};

export {
	mockPartA
};
