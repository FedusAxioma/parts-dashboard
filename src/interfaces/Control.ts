import { Status } from './Status';

export interface Control {
	id: string;
	name: string;
	deviation: number;
	deviationOutTotal: number;
	status: Status;
}
