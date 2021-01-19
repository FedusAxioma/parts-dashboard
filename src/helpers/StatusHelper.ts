import { AiFillCheckCircle, AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { Status, StatusValue } from '../interfaces/Status';

const getStatusValues = (status: Status): StatusValue => {
	switch (status) {
		case 'GOOD':
			return {
				color: 'green',
				icon: AiFillCheckCircle,
			};
		case 'WARNING':
			return {
				color: '#e2e201',
				icon: AiFillWarning,
			};
		case 'ERROR':
		default:
			return {
				color: 'red',
				icon: AiFillCloseCircle,
			};
	}
};

export default {
	getStatusValues,
};
